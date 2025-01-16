import { Component } from '@angular/core';
import { ConvertService } from '../../../app_controllers/services.controller';

@Component({
  selector: 'app-word-to-pdf',
  templateUrl: './word-to-pdf.component.html',
  styleUrls: ['./word-to-pdf.component.css'],
  standalone: true,
  providers: [ConvertService]
})
export class WordToPdfComponent {
 selectedFile: File | null = null;
  
  constructor(private convertService: ConvertService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  
  convertWordToPdf(): void {
    if (this.selectedFile) {
      this.convertService.convertWordToPdf(this.selectedFile).subscribe(response => {
        this.downloadFile(response, 'converted.pdf');
      }, error => {
        console.error('Error converting Word to PDF:', error);
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
