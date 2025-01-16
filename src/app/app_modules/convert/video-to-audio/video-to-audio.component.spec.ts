import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoToAudioComponent } from './video-to-audio.component';

describe('VideoToAudioComponent', () => {
  let component: VideoToAudioComponent;
  let fixture: ComponentFixture<VideoToAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoToAudioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoToAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
