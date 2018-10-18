import { Component, OnInit } from '@angular/core';
// import  * as WebXRPolyfill from 'webxr-polyfill';

// const polyfill = new WebXRPolyfill();
@Component({
  selector: 'ay-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo';
  absolute;
  alpha;
  beta;
  gamma;
  event;

  ngOnInit() {
    window.addEventListener('deviceorientation', this.handleOrientation, true);
    console.log('polyfil ', navigator);
  }

  handleOrientation(event) {
    this.absolute = event.absolute;
    this.alpha = event.alpha;
    this.beta = event.beta;
    this.gamma = event.gamma;
    console.log('event ', event);
    this.event = event;
  }
}
