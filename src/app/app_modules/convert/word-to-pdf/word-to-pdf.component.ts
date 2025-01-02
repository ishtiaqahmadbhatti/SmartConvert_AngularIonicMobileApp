import { Component } from '@angular/core';

@Component({
  selector: 'app-word-to-pdf',
  templateUrl: './word-to-pdf.component.html',
  styleUrls: ['./word-to-pdf.component.css'],
  standalone: true
})
export class WordToPdfComponent {
  selectedFile: File | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  async convertToPDF() {
    if (!this.selectedFile) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      const response = await fetch('https://api.example.com/convert/word-to-pdf', {
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
      a.download = 'converted.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error converting file:', error);
    }
  }
}
