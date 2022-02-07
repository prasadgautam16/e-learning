import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { DiscountedPricePipe } from 'src/app/pipes/discounted-price.pipe';
import { SharedService } from 'src/app/services/shared/shared.service';

import { CourseCardComponent } from './course-card.component';

const mockData = [    {
  "id": "1",
  "courseCreator": "Steve",
  "courseDescription": "Thisisastartercourseforshieldhandling",
  "discount": 10,
  "discountValidTill": "2022-04-28T01:30:00.000Z",
  "price": 573,
  "tags": ["Java"],
  "title": "Learning Java 8 2021",
  "isWishList": false,
  "isAddToCart": true,
  "isPurchased": false
}, {
  "id": "2",
  "courseCreator": "Steve",
  "courseDescription": "Thisisastartercourseforshieldhandling",
  "discount": 10,
  "discountValidTill": "2022-04-28T01:30:00.000Z",
  "price": 573,
  "tags": ["Java"],
  "title": "Learning Java 8 2021",
  "isWishList": false,
  "isAddToCart": true,
  "isPurchased": false
  }
]

class SharedServiceStub {
  courseListUpdated = new Subject<void>();
  getAddToCartCourseList() {
    return mockData;
  }
  calculateTotalPrice() {
    return 1000;
  }

}

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        CourseCardComponent,
        DiscountedPricePipe
      ]
    }).overrideComponent(CourseCardComponent, {
      set: {
        providers: [
          {
            provide: SharedService,
            useClass: SharedServiceStub,
          },
        ],
      },
    })
    .compileComponents();
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.courseCard = {
      id: "1",
      courseCreator: "Steve",
      courseDescription: "Thisisastartercourseforshieldhandling",
      discount: 10,
      discountValidTill: "2022-04-28T01:30:00.000Z",
      price: 573,
      tags: ["Java"],
      title: "Learning Java 8 2021",
      isWishList: false,
      isAddToCart: true,
      isPurchased: false
    };
    component.renderingPlace = "dashboard";
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.courseCard = {
      id: "1",
      courseCreator: "Steve",
      courseDescription: "Thisisastartercourseforshieldhandling",
      discount: 10,
      discountValidTill: "2022-04-28T01:30:00.000Z",
      price: 573,
      tags: ["Java"],
      title: "Learning Java 8 2021",
      isWishList: false,
      isAddToCart: true,
      isPurchased: false
    };
    component.renderingPlace = "dashboard";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
