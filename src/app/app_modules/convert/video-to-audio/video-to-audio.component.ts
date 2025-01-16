import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertService } from '../../../app_services/convert.service';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';

@Component({
  selector: 'app-video-to-audio',
  templateUrl: './video-to-audio.component.html',
  styleUrls: ['./video-to-audio.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [FileOpener], // Add FileOpener to providers
})
export class VideoToAudioComponent {
  selectedFile: File | null = null;
  isConverting = false;
  downloadUrl: string | null = null;

  constructor(
    private convertService: ConvertService,
    private fileOpener: FileOpener // Inject FileOpener
  ) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.downloadUrl = null; // Clear previous download URL
    }
  }

  convertFile(): void {
    if (!this.selectedFile) {
      alert('Please select a video file first!');
      return;
    }

    this.isConverting = true;
    this.convertService.uploadAndConvert(this.selectedFile).subscribe({
      next: (blob: Blob) => {
        this.saveAndOpenFile(blob, 'converted-audio.mp3');
        this.isConverting = false;
      },
      error: (err) => {
        console.error('Conversion failed:', err);
        this.isConverting = false;
      },
    });
  }

  private async saveAndOpenFile(blob: Blob, filename: string): Promise<void> {
    try {
      // Convert Blob to Base64
      const reader = new FileReader();
      reader.onload = async () => {
        const base64Data = (reader.result as string).split(',')[1];
        const savedFile = await Filesystem.writeFile({
          path: filename,
          data: base64Data,
          directory: Directory.Documents,
        });

        const filePath = savedFile.uri;

        // Open the file
        this.openFile(filePath);
      };
      reader.readAsDataURL(blob);
    } catch (err) {
      console.error('Error saving file:', err);
    }
  }

  private openFile(filepath: string): void {
    this.fileOpener
      .open(filepath, 'audio/mpeg') // MIME type for MP3 files
      .then(() => {
        console.log('File is opened');
      })
      .catch((err) => {
        console.error('Error opening file:', err);
        alert('Could not open the file. Please check the file path.');
      });
  }
}
