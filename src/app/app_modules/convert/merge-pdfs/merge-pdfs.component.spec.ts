import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergePdfsComponent } from './merge-pdfs.component';

describe('MergePdfsComponent', () => {
  let component: MergePdfsComponent;
  let fixture: ComponentFixture<MergePdfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MergePdfsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergePdfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
