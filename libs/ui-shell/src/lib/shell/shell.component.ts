import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'ay-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  // TODO: get options input to display sidenav
  @Input() title = 'Demo';
  @Input()
  links = [
    { name: 'Home', path: '/' },
    { name: 'AR', path: '/ar' },
    { name: 'VR', path: '/vr' }
  ];
  constructor() {}
}
