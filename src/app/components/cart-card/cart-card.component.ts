import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from 'src/app/models/course';
import { SharedService } from 'src/app/services/shared/shared.service';


@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent implements OnInit, OnDestroy {
  totalPrice: number = 0;
  addToCartCourseList: Course[] = [];
  subscriptionForListUpdate: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.fetchAddToCartList();
    this.calculateTotalPrice();

    this.subscriptionForListUpdate = this.sharedService.courseListUpdated.subscribe(() => {
      this.fetchAddToCartList();
      this.calculateTotalPrice();
    });
  }

  fetchAddToCartList() {
    this.addToCartCourseList = this.sharedService.getAddToCartCourseList();
  }

  calculateTotalPrice() {
    this.totalPrice = this.sharedService.calculateTotalPrice();
  }

  ngOnDestroy() {
    this.subscriptionForListUpdate.unsubscribe();
  }

}
