import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordToPdfComponent } from './word-to-pdf.component';

describe('WordToPdfComponent', () => {
  let component: WordToPdfComponent;
  let fixture: ComponentFixture<WordToPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordToPdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordToPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
