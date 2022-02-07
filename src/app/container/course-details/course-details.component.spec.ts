import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router, RouterModule } from '@angular/router';

import { CourseDetailsComponent } from './course-details.component';
// import { AppRoutingModule } from './'
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of, Subject } from 'rxjs';
import { SharedService } from 'src/app/services/shared/shared.service';

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
  addToCart(id: string) {
    return mockData[0];
  }
  getCourseById(id: string) {
    return mockData[0];
  }
  addToWishlist(id: string) {
    return mockData[0];
  }
}
  
const mockActivatedRoute = { 
  params: of({ id: '1' })
};

describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;
  let sharedService: SharedService;
  let activatedRoute : ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetailsComponent ],
      imports: [RouterModule, RouterTestingModule],
      providers: [{
        provide: SharedService,
        useClass: SharedServiceStub,
      }, {
        provide: ActivatedRoute, useValue: mockActivatedRoute
      }],
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsComponent);
    activatedRoute = TestBed.get(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
    sharedService = TestBed.get(SharedService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });  
  
  it('checking the routing', () => {
    // let getAddToCartCourseListSpy = spyOn(sharedService, 'subscribe').and.returnValue({id:'1'});

    // expect(component).toBeTruthy();
    expect(activatedRoute.params.subscribe( params => expect(params['id']).toEqual('1') ));

  });

  it('ngOnInit', () => {
    let getAddToCartCourseListSpy = spyOn(activatedRoute.params, 'subscribe');
    component.ngOnInit()
    expect(getAddToCartCourseListSpy).toHaveBeenCalled();
  });

  it('getCourseById', () => {
    let res = component.getCourseById('1');

    expect(res).toEqual(mockData[0]);
  });


  it('addToCart', () => {
    let setSpy = spyOn(sharedService, 'addToCart').and.returnValue("Course successfully added in the cart");
    component.addToCart('1');
    expect(setSpy).toHaveBeenCalled();
  });  

  it('addToCart', () => {
    let setSpy = spyOn(sharedService, 'addToCart').and.returnValue("Course XYZ already exist in cart!");
    component.addToCart('1');
    expect(setSpy).toHaveBeenCalled();
  });  

  it('addToWishList', () => {
    let setSpy = spyOn(sharedService, 'addToWishlist').and.returnValue("Course successfully added in the wishlist");
    component.addToWishList('1');
    expect(setSpy).toHaveBeenCalled();
  });  

  it('addToWishList', () => {
    let setSpy = spyOn(sharedService, 'addToWishlist').and.returnValue("Course XYZ already exist in wishlist!");
    component.addToWishList('1');
    expect(setSpy).toHaveBeenCalled();
  });  

  it('addToWishList', () => {
    let setSpy = spyOn(sharedService, 'getCourseById').and.returnValue(mockData[0]);
    let res = component.getCourseById('1');
    expect(setSpy).toHaveBeenCalled();
    expect(res).toEqual(mockData[0]);
  }); 
});
