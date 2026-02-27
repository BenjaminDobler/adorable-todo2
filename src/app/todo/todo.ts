import { Component, signal, computed } from '@angular/core';
import { Button } from '@fundamental-ngx/ui5-webcomponents/button';
import { Card } from '@fundamental-ngx/ui5-webcomponents/card';
import { CardHeader } from '@fundamental-ngx/ui5-webcomponents/card-header';
import { Input } from '@fundamental-ngx/ui5-webcomponents/input';
import { CheckBox } from '@fundamental-ngx/ui5-webcomponents/check-box';
import { Tag } from '@fundamental-ngx/ui5-webcomponents/tag';
import { Dialog } from '@fundamental-ngx/ui5-webcomponents/dialog';
import { Toast } from '@fundamental-ngx/ui5-webcomponents/toast';
import { Select } from '@fundamental-ngx/ui5-webcomponents/select';
import { Option } from '@fundamental-ngx/ui5-webcomponents/option';
import { SegmentedButton } from '@fundamental-ngx/ui5-webcomponents/segmented-button';
import { SegmentedButtonItem } from '@fundamental-ngx/ui5-webcomponents/segmented-button-item';
import { Icon } from '@fundamental-ngx/ui5-webcomponents/icon';
import '@ui5/webcomponents-icons/dist/add.js';
import '@ui5/webcomponents-icons/dist/delete.js';
import '@ui5/webcomponents-icons/dist/edit.js';
import '@ui5/webcomponents-icons/dist/accept.js';
import '@ui5/webcomponents-icons/dist/checklist.js';
import '@ui5/webcomponents-icons/dist/pending.js';
import '@ui5/webcomponents-icons/dist/task.js';
import '@ui5/webcomponents-icons/dist/complete.js';
import '@ui5/webcomponents-icons/dist/decline.js';
import '@ui5/webcomponents-icons/dist/filter.js';
import '@ui5/webcomponents-icons/dist/flag.js';

export type Priority = 'Low' | 'Medium' | 'High';
export type FilterMode = 'All' | 'Active' | 'Completed';

export interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
  priority: Priority;
  createdAt: Date;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    Button, Card, CardHeader, Input, CheckBox, Tag,
    Dialog, Toast, Select, Option, SegmentedButton,
    SegmentedButtonItem, Icon,
  ],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  private nextId = 1;

  todos = signal<TodoItem[]>([
    { id: this.nextId++, title: 'Review project requirements', completed: true, priority: 'High', createdAt: new Date() },
    { id: this.nextId++, title: 'Set up Angular project structure', completed: true, priority: 'High', createdAt: new Date() },
    { id: this.nextId++, title: 'Build todo component UI', completed: false, priority: 'Medium', createdAt: new Date() },
    { id: this.nextId++, title: 'Write unit tests', completed: false, priority: 'Low', createdAt: new Date() },
    { id: this.nextId++, title: 'Deploy to production', completed: false, priority: 'Medium', createdAt: new Date() },
  ]);

  filter = signal<FilterMode>('All');
  newTitle = signal('');
  newPriority = signal<Priority>('Medium');
  searchQuery = signal('');

  // Edit dialog
  editDialogOpen = signal(false);
  editingTodo = signal<TodoItem | null>(null);
  editTitle = signal('');
  editPriority = signal<Priority>('Medium');

  // Delete dialog
  deleteDialogOpen = signal(false);
  todoToDelete = signal<TodoItem | null>(null);

  // Toast
  toastOpen = signal(false);
  toastMessage = signal('');

  filteredTodos = computed(() => {
    const f = this.filter();
    const q = this.searchQuery().toLowerCase();
    return this.todos().filter(t => {
      const matchesFilter =
        f === 'All' || (f === 'Active' && !t.completed) || (f === 'Completed' && t.completed);
      const matchesSearch = !q || t.title.toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });
  });

  totalCount = computed(() => this.todos().length);
  activeCount = computed(() => this.todos().filter(t => !t.completed).length);
  completedCount = computed(() => this.todos().filter(t => t.completed).length);

  onSearchInput(event: CustomEvent) {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }

  onNewTitleInput(event: CustomEvent) {
    this.newTitle.set((event.target as HTMLInputElement).value);
  }

  onNewPriorityChange(event: CustomEvent) {
    const val = event.detail?.selectedOption?.getAttribute('value') as Priority;
    if (val) this.newPriority.set(val);
  }

  addTodo() {
    const title = this.newTitle().trim();
    if (!title) return;
    this.todos.update(list => [
      ...list,
      { id: this.nextId++, title, completed: false, priority: this.newPriority(), createdAt: new Date() },
    ]);
    this.newTitle.set('');
    this.showToast('Task added!');
  }

  onAddKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') this.addTodo();
  }

  toggleTodo(id: number) {
    this.todos.update(list =>
      list.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  }

  onToggle(event: CustomEvent, id: number) {
    this.toggleTodo(id);
  }

  openEdit(todo: TodoItem) {
    this.editingTodo.set({ ...todo });
    this.editTitle.set(todo.title);
    this.editPriority.set(todo.priority);
    this.editDialogOpen.set(true);
  }

  onEditTitleInput(event: CustomEvent) {
    this.editTitle.set((event.target as HTMLInputElement).value);
  }

  onEditPriorityChange(event: CustomEvent) {
    const val = event.detail?.selectedOption?.getAttribute('value') as Priority;
    if (val) this.editPriority.set(val);
  }

  saveEdit() {
    const todo = this.editingTodo();
    if (!todo || !this.editTitle().trim()) return;
    this.todos.update(list =>
      list.map(t => t.id === todo.id ? { ...t, title: this.editTitle().trim(), priority: this.editPriority() } : t)
    );
    this.editDialogOpen.set(false);
    this.showToast('Task updated!');
  }

  confirmDelete(todo: TodoItem) {
    this.todoToDelete.set(todo);
    this.deleteDialogOpen.set(true);
  }

  onDeleteConfirmed() {
    const todo = this.todoToDelete();
    if (todo) {
      this.todos.update(list => list.filter(t => t.id !== todo.id));
      this.showToast('Task deleted.');
    }
    this.deleteDialogOpen.set(false);
  }

  clearCompleted() {
    this.todos.update(list => list.filter(t => !t.completed));
    this.showToast('Completed tasks cleared.');
  }

  onFilterChange(event: CustomEvent) {
    const items: { text?: string }[] = event.detail?.selectedItems ?? [];
    const text = items[0]?.text as FilterMode | undefined;
    if (text) this.filter.set(text);
  }

  priorityColorScheme(priority: Priority): string {
    if (priority === 'High') return '1';
    if (priority === 'Medium') return '6';
    return '8';
  }

  private showToast(msg: string) {
    this.toastMessage.set(msg);
    this.toastOpen.set(false);
    setTimeout(() => this.toastOpen.set(true), 10);
  }
}
