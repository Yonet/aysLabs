import { Component } from '@angular/core';
// import  * as WebXRPolyfill from 'webxr-polyfill';

// const polyfill = new WebXRPolyfill();
@Component({
  selector: 'ay-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  constructor() {
    console.log('polyfil ', navigator);
  }
}
