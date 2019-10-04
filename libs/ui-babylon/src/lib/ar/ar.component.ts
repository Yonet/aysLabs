import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { BabylonService } from '../babylon-service/babylon-service';

@Component({
  selector: 'ay-bb-ar',
  templateUrl: './ar.component.html',
  styleUrls: ['./ar.component.scss']
})
export class ArComponent implements AfterViewInit {
  // canvas;
  @ViewChild('canvas', { static: false }) canvas;
  constructor(private service: BabylonService) {}

  ngAfterViewInit() {
    console.log(" Canvas is ", this.canvas.nativeElement);
    this.setUpScene();
  }

  setUpScene() {
    this.service.createScene(this.canvas);
  }

  updata() {}

  onClick(e) {
    console.log('clicked ', e);
  }
}
