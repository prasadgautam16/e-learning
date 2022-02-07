import { Component, OnDestroy, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Constant } from 'src/app/data/constant';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  courseListByPage: Course[] = [];
  cPage : number = 1;
  tPage : number = 1;
  totalPrice: number = 0;
  savedPrice: number = 0;
  cartCourseList: Course[] = [];
  subscriptionForListUpdate: any;
  recommendedCourses: Course[]= [];
  alertMessage: string = "";

  constructor(private sharedService : SharedService, private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.fetchCourseForCurrentPage();
    this.calculateTotalPrice();
    this.recommendedCourses = this.checkoutService.getAnyTwoRecommendedCourses();

    this.subscriptionForListUpdate = this.sharedService.courseListUpdated.subscribe(() => {
      this.fetchCourseForCurrentPage();
      this.calculateTotalPrice();
    });

  }

  fetchCourseForCurrentPage(pageNumber = this.cPage.toString()) {
    this.courseListByPage = this.sharedService.getCoursesByPage(parseInt(pageNumber), "checkout", 3);
    this.cartCourseList = this.sharedService.getAddToCartCourseList();
    this.tPage = Math.ceil(this.cartCourseList.length/3);
  }

  calculateTotalPrice() {
    let expectedPrice = this.cartCourseList.reduce((totalPrice, course)=> {
      return totalPrice + course.price;
    }, 0);

    this.totalPrice = this.sharedService.calculateTotalPrice();

    this.savedPrice = expectedPrice - this.totalPrice;
  }

  ngOnDestroy() {
    this.subscriptionForListUpdate.unsubscribe();
  }

  clickCheckOut() {
    // alert("You have successfully placed the order.");
    this.alertMessage = Constant.ORDER_PLACED_SUCCESSFULLY;
    this.checkoutService.removeAllFromCart();
  }

  
}
