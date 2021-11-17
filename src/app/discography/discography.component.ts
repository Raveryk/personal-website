import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.css']
})
export class DiscographyComponent implements OnInit {
  pageTitle: string = 'Discography'
  constructor() { }

  ngOnInit(): void {
  }

}
