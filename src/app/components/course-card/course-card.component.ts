import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() courseCard: any;
  @Input() renderingPlace: string = "";
  alertMessage:string = "";

  constructor(private sharedService: SharedService ) { }

  ngOnInit(): void {
  }
  
  addToCartClick(id: string) {
    this.alertMessage = this.sharedService.addToCart(id);
    // alert(message);
  }
  
  addToWishList(id: string) {
    this.alertMessage = this.sharedService.addToWishlist(id);
    // alert(message);
  }

  removeFromCart(id: string) {
    this.alertMessage = this.sharedService.removeFromCart(id);
    // alert(message);
  }

  removeFromWishlist(id: string) {
    this.alertMessage = this.sharedService.removeFromWishlist(id);
    // alert(message);
  }
}
