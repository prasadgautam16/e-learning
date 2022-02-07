import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-ribbon',
  template: '<div class="bg-dark text-white title-ribbon mb-4">{{title}}</div>',
  styleUrls: ['./title-ribbon.component.css']
})
export class TitleRibbonComponent implements OnInit {

  title: string = "Discover Latest Courses on React";
  subscriptionForTitleUpdate: any;
  constructor() { }

  ngOnInit(): void {  }
}
