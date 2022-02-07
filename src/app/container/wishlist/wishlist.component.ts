import { Component, OnDestroy, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit, OnDestroy {

  courseListByPage : Course[] = [];
  cPage : number = 1;
  tPage : number = 1;
  totalPrice: number = 0;
  cartCourseList: Course[] = [];
  subscriptionForListUpdate: any;
  subscriptionForcourseSorting: any;

  constructor(private sharedService : SharedService) { }

  ngOnInit(): void {
    this.fetchCourseForCurrentPage();

    this.subscriptionForListUpdate = this.sharedService.courseListUpdated.subscribe(() => {
      this.fetchCourseForCurrentPage();
    });

    this.subscriptionForcourseSorting = this.sharedService.courseListSorted.subscribe(() => {
      this.fetchCourseForCurrentPage();
    });
  }

  fetchCourseForCurrentPage(pageNumber = this.cPage.toString()) {
    this.courseListByPage = this.sharedService.getCoursesByPage(parseInt(pageNumber), "wishlist", 5);
    this.cartCourseList = this.sharedService.getWishList();
    this.tPage = Math.ceil(this.cartCourseList.length/5);
  }

  ngOnDestroy() {
    this.subscriptionForListUpdate.unsubscribe();
  }
}
