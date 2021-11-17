import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './music-projects.component.html',
  styleUrls: ['./music-projects.component.css']
})
export class MusicProjectsComponent implements OnInit {
  pageTitle: string = 'Music Projects'
  constructor() { }

  ngOnInit(): void {
  }

}
