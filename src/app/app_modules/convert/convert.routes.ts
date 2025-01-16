import { Routes } from '@angular/router';

export const ConvertRoutes: Routes = [
  {
    path: 'pdf-to-word',
    loadComponent: () => import('./pdf-to-word/pdf-to-word.component').then(c => c.PdfToWordComponent)
  },
  {
    path: 'word-to-pdf',
    loadComponent: () => import('./word-to-pdf/word-to-pdf.component').then(c => c.WordToPdfComponent)
  },
  {
    path: 'image-to-pdf',
    loadComponent: () => import('./image-to-pdf/image-to-pdf.component').then(c => c.ImageToPdfComponent)
  },
  {
    path: 'merge-pdfs',
    loadComponent: () => import('./merge-pdfs/merge-pdfs.component').then(c => c.MergePdfsComponent)
  },
  {
    path: 'video-to-audio',
    loadComponent: () => import('./video-to-audio/video-to-audio.component').then(c => c.VideoToAudioComponent)
  }
];
