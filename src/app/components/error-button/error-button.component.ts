import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error-button',
  imports: [],
  templateUrl: './error-button.component.html',
  styleUrl: './error-button.component.css'
})
export class ErrorButtonComponent {
  @Input() label: string = '';
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  onClickButton(event: Event) {
    this.onClick.emit(event);
  }
}
