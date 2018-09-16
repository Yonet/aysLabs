import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'c4g-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() items = [];
  @Output() upvote = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
