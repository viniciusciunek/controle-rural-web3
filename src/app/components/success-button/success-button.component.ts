import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-success-button',
  imports: [],
  templateUrl: './success-button.component.html',
  styleUrl: './success-button.component.css'
})
export class SuccessButtonComponent {
  @Input() label: string = '';
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  onClickButton(event: Event) {
    this.onClick.emit(event);
  }

}
