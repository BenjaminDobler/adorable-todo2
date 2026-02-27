import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  {
    path: 'todo',
    loadComponent: () => import('./todo/todo').then(m => m.Todo),
  },
];
