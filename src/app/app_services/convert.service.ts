import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationConfiguration } from '../app.config';
import { ConvertModel } from '../app_controllers/models.controller';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class ConvertService {

  private apiUrl =ApplicationConfiguration.Get().ApiServiceLink + 'VideoToAudio';
  constructor(private http: HttpClient) { }


  convertPdfToWord(file: File): Observable<Blob> {
    const formData: FormData = new FormData();
    formData.append('pdfFile', file, file.name);
  
    return this.http.post(`${this.apiUrl}/pdf-to-word`, formData, {
      responseType: 'blob'
    });
  }
  
  convertWordToPdf(file: File): Observable<Blob> {
    const formData: FormData = new FormData();
    formData.append('wordFile', file, file.name);
  
    return this.http.post(`${this.apiUrl}/word-to-pdf`, formData, {
      responseType: 'blob'
    });
  }

  mergePdfs(files: File[]): Observable<Blob> {
    const formData: FormData = new FormData();
    files.forEach((file, index) => formData.append(`pdfFiles[${index}]`, file, file.name));
 
    return this.http.post(`${this.apiUrl}/merge-pdfs`, formData, {
      responseType: 'blob'
    });
  }
 
  convertImageToPdf(file: File): Observable<Blob> {
    const formData: FormData = new FormData();
    formData.append('imageFile', file, file.name);
 
    return this.http.post(`${this.apiUrl}/image-to-pdf`, formData, {
      responseType: 'blob'
    });
  }
  
  uploadAndConvert(file: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('VideoFile', file, file.name);

    return this.http.post(`${this.apiUrl}/convert`, formData, {
      responseType: 'blob'
    });
  }
}
