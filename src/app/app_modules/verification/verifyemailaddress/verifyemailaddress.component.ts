import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-verifyemailaddress',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './verifyemailaddress.component.html',
  styleUrls: ['./verifyemailaddress.component.css']
})
export class VerifyemailaddressComponent {
  inputValues: boolean[] = [false, false, false, false, false, false];

  moveToNext(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;
    this.inputValues[index] = input.value.length === 1;
    if (input.value.length === 1 && index < 5) {
      const nextInput = input.nextElementSibling as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }
}
