import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  pageTitle: string = 'About Me'

  constructor() { }

  ngOnInit(): void {
  }

}
