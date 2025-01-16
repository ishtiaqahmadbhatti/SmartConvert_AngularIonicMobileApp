import { Component } from '@angular/core';
import { ConvertService } from '../../../app_controllers/services.controller';

@Component({
  selector: 'app-image-to-pdf',
  templateUrl: './image-to-pdf.component.html',
  styleUrls: ['./image-to-pdf.component.css']
})
export class ImageToPdfComponent {
  selectedFile: File | null = null;
  
  constructor(private convertService: ConvertService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  convertImageToPdf(): void {
    if (this.selectedFile) {
      this.convertService.convertImageToPdf(this.selectedFile).subscribe(response => {
        this.downloadFile(response, 'converted.pdf');
      }, error => {
        console.error('Error converting image to PDF:', error);
      });
    }
  }

  private downloadFile(data: Blob, filename: string): void {
    const url = window.URL.createObjectURL(data);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
}
