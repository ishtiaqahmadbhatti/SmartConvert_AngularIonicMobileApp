import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConvertService } from '../../../app_controllers/services.controller';
import { AdMob, BannerAdOptions, BannerAdPosition, BannerAdSize, RewardInterstitialAdOptions } from '@capacitor-community/admob';
@Component({
  selector: 'app-merge-pdfs',
  templateUrl: './merge-pdfs.component.html',
  styleUrls: ['./merge-pdfs.component.css'],
  standalone: true,
  providers : [ConvertService]
})
export class MergePdfsComponent implements OnInit, OnDestroy {
  selectedFiles: File[] = [];

  constructor(private convertService: ConvertService) {
   }
   ngOnInit() { 
    this.showBannerAd();
   }
  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFiles = Array.from(input.files);
    }
  }

  mergePdfs(): void {
    if (this.selectedFiles.length > 0) {
      this.showInterstitialAd().then(() => {
        this.convertService.mergePdfs(this.selectedFiles).subscribe(response => {
          this.downloadFile(response, 'merged.pdf');
        }, error => {
          console.error('Error merging PDFs:', error);
        });
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

  async showBannerAd() {
    const options: BannerAdOptions = {
      adId: 'ca-app-pub-3940256099942544/6300978111', // Test Banner Ad Unit ID
      adSize: BannerAdSize.LARGE_BANNER, // Options: BANNER, LARGE_BANNER, FULL_BANNER, LEADERBOARD, SMART_BANNER
      position: BannerAdPosition.BOTTOM_CENTER, // Place the banner ad at the bottom center
      margin: 0, // Optional: Margin around the banner ad
    };

    try {
      await AdMob.showBanner(options);
    } catch (error) {
      console.error('Error showing banner ad:', error);
    }
  }

  async showInterstitialAd() {
    const options: RewardInterstitialAdOptions = {
      adId: 'ca-app-pub-3940256099942544/1033173712', // Test Interstitial Ad Unit ID
    };

    try {
      await AdMob.prepareInterstitial(options);
      await AdMob.showInterstitial();
    } catch (error) {
      console.error('Error showing interstitial ad:', error);
    }
  }

  ngOnDestroy() {
    this.hideBannerAd();
  }

  async hideBannerAd() {
    try {
      await AdMob.hideBanner();
    } catch (error) {
      console.error('Error hiding banner ad:', error);
    }
  }
}
