import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageToPdfComponent } from './image-to-pdf.component';

describe('ImageToPdfComponent', () => {
  let component: ImageToPdfComponent;
  let fixture: ComponentFixture<ImageToPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageToPdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageToPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
