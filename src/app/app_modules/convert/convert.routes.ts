import { Routes } from '@angular/router';

export const ConvertRoutes: Routes = [
  {
    path: 'pdf-to-word',
    loadComponent: () => import('./pdf-to-word/pdf-to-word.component').then(c => c.PdfToWordComponent)
  },
  {
    path: 'word-to-pdf',
    loadComponent: () => import('./word-to-pdf/word-to-pdf.component').then(c => c.WordToPdfComponent)
  }
];
