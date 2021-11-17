import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {
  pageTitle: string = 'Software'

  constructor() { }

  ngOnInit(): void {
  }

}
