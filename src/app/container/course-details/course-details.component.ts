import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  courseDetail: any = {};
  alertMessage:string = "";

  constructor(private sharedService : SharedService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void { 
    this.activateRoute.params.subscribe( params => {
      this.courseDetail = this.getCourseById(params['id']);
    });
  }

  addToCart(id: string) {
    this.alertMessage = this.sharedService.addToCart(id);
    // alert(message);
  }

  addToWishList(id: string) {
    this.alertMessage = this.sharedService.addToWishlist(id);
    // alert(message);
  }

  getCourseById(id: string) {
    return this.sharedService.getCourseById(id);
  }
}
