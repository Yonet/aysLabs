import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'xr-display-at-location',
  templateUrl: './display-at-location.component.html',
  styleUrls: ['./display-at-location.component.scss']
})
export class DisplayAtLocationComponent implements OnInit, OnChanges {
  renderer;
  scene;
  camera;
  @Input() data = ['Hi There!'];
  @Input() options = {
    background: 'transparent',
    width: 200,
    height: 300
  };
  @Output() clicked = new EventEmitter();

  ngOnInit() {
    this.setUp();
    this.animate();
  }

  ngOnChanges() {
    // change the displayed data
  }

  setUp() {
    //Set up styling from the options
  };

  animate() {
    requestAnimationFrame( this.animate.bind(this) );
    this.renderer.render( this.scene, this.camera );
  }

  onClick(e) {}


}
