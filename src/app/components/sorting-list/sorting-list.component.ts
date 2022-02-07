import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-sorting-list',
  templateUrl: './sorting-list.component.html',
  styleUrls: ['./sorting-list.component.css']
})
export class SortingListComponent implements OnInit {

  constructor(private sharedService : SharedService ) { }

  ngOnInit(): void {
    this.sharedService.sortCourseList("id");
  }

  sorting(event : Event) {
    let value = (<HTMLInputElement>event?.target).value;
    this.sharedService.sortCourseList(value);
  }

}
