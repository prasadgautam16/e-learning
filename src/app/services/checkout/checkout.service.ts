import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  courseList : Course[] = [];
  constructor(private sharedService : SharedService ) { }

  getAnyTwoRecommendedCourses() {
    return this.sharedService.getFullList().slice(0,2);
  }

  removeAllFromCart() {
    let flag = false;
    this.courseList = this.sharedService.getLatestCourseList();

    this.courseList.forEach((course) => {
      if(course.isAddToCart) {
        course.isAddToCart = false;
        flag = true;
      }
    });

    if (flag) this.sharedService.settingCourseList(this.courseList);
  }

}
