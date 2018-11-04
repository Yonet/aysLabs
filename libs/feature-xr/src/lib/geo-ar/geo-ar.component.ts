import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ay-geo-ar',
  templateUrl: './geo-ar.component.html',
  styleUrls: ['./geo-ar.component.scss']
})
export class GeoArComponent implements OnInit {
  info = "No session yet!";

  constructor() { }

  /**
   * checks for the existence of navigator.xr & XRSession.prototype.requestHitTest
   * If both objects exist, we can request a device, via navigator.xr.requestDevice()
   * which returns a promise that resolves with an XRDevice, or rejects if none is found.
   */
  ngOnInit() {
  }



  /**
   * TODO: Not sure if I want to keep this here.
   * @param session
   */
  onSessionStarted(session){
    this.info  = 'Session started!';
  }

  /**
   * TODO: Not sure if I want to keep this here.
   * @param time
   * @param frame
   */
  onXRFrame(time, frame){}

}
