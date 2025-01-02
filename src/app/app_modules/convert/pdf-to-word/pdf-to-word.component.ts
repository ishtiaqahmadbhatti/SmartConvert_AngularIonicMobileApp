import { Component } from '@angular/core';

@Component({
  selector: 'app-pdf-to-word',
  templateUrl: './pdf-to-word.component.html',
  styleUrls: ['./pdf-to-word.component.css'],
  standalone: true,
  imports: []
})
export class PdfToWordComponent {
  selectedFile: File | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  async convertToWord() {
    if (!this.selectedFile) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      const response = await fetch('https://api.example.com/convert/pdf-to-word', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Conversion failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'converted.docx';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error converting file:', error);
    }
  }
}
