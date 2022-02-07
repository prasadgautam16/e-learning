import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent implements OnInit {

  courseListByPage: Course[] = [];
  cPage : number = 1;
  tPage : number = 1;
  searchText: string = "";
  subscriptionForCourseSorting: any;
  subscriptionForListUpdate: any;

  constructor(private sharedService : SharedService ) {}

  ngOnInit(): void {
    this.fetchCourseForCurrentPage();

    this.subscriptionForCourseSorting = this.sharedService.courseListSorted.subscribe(() => {
      this.fetchCourseForCurrentPage();
    });

    this.subscriptionForListUpdate = this.sharedService.courseListUpdated.subscribe(() => {
      this.fetchCourseForCurrentPage();
    });
  }

  onSearchInput() {
    this.sharedService.searchFilter(this.searchText);
  }

  fetchCourseForCurrentPage(pageNumber = this.cPage.toString()) {
    if ( this.searchText!== "") {
      this.tPage = Math.ceil(this.sharedService.getSearchList()?.length/5);
      this.courseListByPage = this.sharedService.getCoursesByPage(parseInt(pageNumber), "search", 5);
    } else {
      this.tPage = Math.ceil(this.sharedService.getLengthOfCourseList()/5);
      this.courseListByPage = this.sharedService.getCoursesByPage(parseInt(pageNumber), "dashboard", 5);
    }
  }
}
