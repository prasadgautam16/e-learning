import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {
  @Input() message: string = '';
  @Input() showOkBtn: boolean = false;

  @Output() close = new EventEmitter<void>();  

  constructor() { }

  ngOnInit(): void {
  }

  onCloseClick() {
    this.close.emit();
  }

}
