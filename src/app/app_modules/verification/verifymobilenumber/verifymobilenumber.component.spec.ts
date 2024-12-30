import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifymobilenumberComponent } from './verifymobilenumber.component';

describe('VerifymobilenumberComponent', () => {
  let component: VerifymobilenumberComponent;
  let fixture: ComponentFixture<VerifymobilenumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifymobilenumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifymobilenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
