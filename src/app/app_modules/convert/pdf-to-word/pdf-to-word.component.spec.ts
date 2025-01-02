import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfToWordComponent } from './pdf-to-word.component';

describe('PdfToWordComponent', () => {
  let component: PdfToWordComponent;
  let fixture: ComponentFixture<PdfToWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfToWordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfToWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
