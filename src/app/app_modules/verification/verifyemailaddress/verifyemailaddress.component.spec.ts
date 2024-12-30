import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyemailaddressComponent } from './verifyemailaddress.component';

describe('VerifyemailaddressComponent', () => {
  let component: VerifyemailaddressComponent;
  let fixture: ComponentFixture<VerifyemailaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyemailaddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyemailaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
