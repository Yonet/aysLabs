import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'xr-ar-button',
  templateUrl: './ar-button.component.html',
  styleUrls: ['./ar-button.component.scss']
})
export class ArButtonComponent implements OnInit {
  xr = false;
  @Output() xrPresent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * When AR device is detected and enterAR button is clicked
   */
  onEnterAR() {
    this.xrPresent.next(true);
  }

  /**
   * Display message if the device is not AR compatible
   */
  onNoXRDevice() {
    this.xrPresent.next(false);
  }

}
