import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Course } from '../../models/course'
import MockCourseJSON from '../../data/course-mock-data.json';
import { Constant } from 'src/app/data/constant';
@Injectable({
  providedIn: 'root'
})
export class SharedService { 

  constCourseList : Course[] = MockCourseJSON;

  courseListUpdated = new Subject<void>();
  courseListSorted = new Subject<void>();

  courseList : Course[] = this.constCourseList;
  searchList : Course[] = this.constCourseList;

  constructor() {
    this.constCourseList = MockCourseJSON;
  }

  getCoursesByPage(pageNo: number = 1, forWhichScreen: string = "dashboard", maximumPerPage: number = 5 ) {
    let startIndex = (pageNo - 1) * maximumPerPage;
    let endIndex = (pageNo - 1) * maximumPerPage + maximumPerPage;
    switch (forWhichScreen) {
      case "dashboard":
        return this.courseList.slice(startIndex, endIndex);
      case "checkout":
        return this.getAddToCartCourseList().slice(startIndex, endIndex);
      case "wishlist":
        return this.getWishList().slice(startIndex, endIndex);
      case "search":
        return this.searchList.slice(startIndex, endIndex);
      default:
        return [];
    }
  }

  getLengthOfCourseList() {
    return this.courseList.length;
  }

  settingCourseList(list: Course[]) {
    this.courseList = list;
    this.courseListUpdated.next();
  }

  searchFilter(searchText: string) {
    if (this.courseList && this.courseList.length > 0) this.searchList = [ ...this.courseList ];
    const regex = new RegExp(searchText,"gi");

    this.searchList = this.searchList.filter((course: any) => {
      return course?.title?.match(regex)?.length > 0 || 
            course?.courseCreator?.match(regex)?.length > 0 || 
            course.tags.find((tag: any) => tag.match(regex)?.length > 0); 
    });

    this.courseListUpdated.next();
  }

  getFullList() {
    return this.constCourseList;
  }

  getLatestCourseList() {
    return this.courseList;
  }

  getCourseById(id: string = "1") {
    return this.courseList.filter((c) => c.id === id)[0];
  }

  getAddToCartCourseList() {
    return this.courseList.filter((c) => c.isAddToCart);
  }

  getWishList() {
    return this.courseList.filter((c) => c.isWishList);
  }

  getSearchList() {
    return this.searchList;
  }

  addToCart(id: string) {
    let flag = false;
    this.courseList.forEach((course) => {
      if(course.id === id && !course.isAddToCart) {
        course.isAddToCart = true;
        flag = true;
      }
    })

    if (flag) {
      this.courseListUpdated.next();
      return Constant.ADDED_TO_CART_SUCCESSFULLY;
    } else {
      return Constant.COURSE_ALREADY_EXIST_IN_CART;
    }
  }

  addToWishlist(id: string) {
    let flag = false;
    this.courseList.forEach((course) => {
      if(course.id === id && !course.isWishList) {
        course.isWishList = true;
        flag = true;
      }
    })

    if (flag) {
      this.courseListUpdated.next();
      return Constant.ADDED_TO_WISHLIST_SUCCESSFULLY;
    } else {
      return Constant.COURSE_ALREADY_EXIST_IN_WISHLIST;
    }
  }

  removeFromCart(id: string) {
    let flag = false;
    this.courseList.forEach((course) => {
      if(course.id === id && course.isAddToCart) {
        course.isAddToCart = false;
        flag = true;
      }
    });

    if (flag) {
      this.courseListUpdated.next();
      return Constant.REMOVED_FROM_CART_SUCCESSFULLY;
    } else {
      return Constant.COURSE_NOT_EXIST_IN_CART;
    }
  }

  removeFromWishlist(id: string) {
    let flag = false;
    this.courseList.forEach((course) => {
      if(course.id === id && course.isWishList) {
        course.isWishList = false;
        flag = true;
      }
    });

    if (flag) {
      this.courseListUpdated.next();
      return Constant.REMOVED_FROM_WISHLIST_SUCCESSFULLY;
    } else {
      return Constant.COURSE_NOT_EXIST_IN_WISHLIST;
    }
  }

  sortCourseList(sortInWay: string = "id") {
    switch (sortInWay) {
      case "asc":
        this.courseList.sort((a,b)=> a.price-b.price);
        this.searchList.sort((a,b)=> a.price-b.price);
        break;
      case "desc":
        this.courseList.sort((b,a)=> a.price-b.price);
        this.searchList.sort((b,a)=> a.price-b.price);
        break;
      default:
        this.courseList.sort((a,b)=> parseInt(a.id) - parseInt(b.id));
        this.searchList.sort((a,b)=> parseInt(a.id) - parseInt(b.id));
        break;
    }
    this.courseListSorted.next();
  }

  calculateTotalPrice() {
    return this.getAddToCartCourseList().reduce((totalPrice, course)=> {
      if (course.discountValidTill) {
        let discountDate = new Date(course.discountValidTill);
        let today = new Date();
        if (today < discountDate){
          totalPrice += Math.floor(course.price - (course.price * course.discount) / 100);
        } else {
          totalPrice += course.price
        }
      } else {
        totalPrice += course.price
      }

      return totalPrice;
    }, 0);
  }
}
