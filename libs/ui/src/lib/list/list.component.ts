import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ay-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() items = [];
  @Input() options = {};
  @Output() clicked = new EventEmitter();
  @Output() hovered = new EventEmitter();
  @Output() dragged= new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
