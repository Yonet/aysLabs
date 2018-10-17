import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ay-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [
    { name: 'First Project', id: 1, vote: 0 },
    { name: 'Second Project', id: 2, vote: 1 }
  ];

  constructor() {}

  ngOnInit() {}
}
