import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-neo-button',
  templateUrl: './neo-button.component.html',
  styleUrls: ['./neo-button.component.scss']
})
export class NeoButtonComponent implements OnInit {

  //@Input() classes: string;
  //@Input() titleText: string;
  //@Input() isDisabled: boolean;
  @Output() callFunction = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  callEvent() {
    this.callFunction.emit();
  }

}
