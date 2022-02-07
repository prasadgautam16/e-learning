import { TestBed } from '@angular/core/testing';
import { SharedService } from '../shared/shared.service';

import { CourseDetailsService } from './course-details.service';

const mockData = [{
  "id": "1",
  "courseCreator": "Steve",
  "courseDescription": "Thisisastartercourseforshieldhandling",
  "discount": 10,
  "discountValidTill": "2022-04-28T01:30:00.000Z",
  "price": 573,
  "tags": ["Java"],
  "title": "Learning Java 8 2021",
  "isWishList": true,
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
  "isWishList": true,
  "isAddToCart": true,
  "isPurchased": false
}, {
  "id": "3",
  "courseCreator": "Steve",
  "courseDescription": "Thisisastartercourseforshieldhandling",
  "discount": 10,
  "discountValidTill": "2022-04-28T01:30:00.000Z",
  "price": 573,
  "tags": ["Java"],
  "title": "Learning Java 8 2021",
  "isWishList": true,
  "isAddToCart": true,
  "isPurchased": false
}, {
  "id": "4",
  "courseCreator": "Steve",
  "courseDescription": "Thisisastartercourseforshieldhandling",
  "discount": 10,
  "discountValidTill": "2022-04-28T01:30:00.000Z",
  "price": 573,
  "tags": ["Java"],
  "title": "Learning Java 8 2021",
  "isWishList": true,
  "isAddToCart": true,
  "isPurchased": false
}, {
  "id": "5",
  "courseCreator": "Steve",
  "courseDescription": "Thisisastartercourseforshieldhandling",
  "discount": 10,
  "discountValidTill": "2022-04-28T01:30:00.000Z",
  "price": 573,
  "tags": ["Java"],
  "title": "Learning Java 8 2021",
  "isWishList": true,
  "isAddToCart": true,
  "isPurchased": false
}, {
  "id": "6",
  "courseCreator": "Steve",
  "courseDescription": "Thisisastartercourseforshieldhandling",
  "discount": 10,
  "discountValidTill": "2022-04-28T01:30:00.000Z",
  "price": 573,
  "tags": ["Java"],
  "title": "Learning Java 8 2021",
  "isWishList": false,
  "isAddToCart": false,
  "isPurchased": false
}];

const mockCourse = {
  "id": "6",
  "courseCreator": "Steve",
  "courseDescription": "Thisisastartercourseforshieldhandling",
  "discount": 10,
  "discountValidTill": "2022-04-28T01:30:00.000Z",
  "price": 573,
  "tags": ["Java"],
  "title": "Learning Java 8 2021",
  "isWishList": false,
  "isAddToCart": false,
  "isPurchased": false
};

describe('CourseDetailsService', () => {
  let service: CourseDetailsService;
  let sharedService: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseDetailsService);
    sharedService = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('calling getAnyTwoRecommendedCourses ', ()=>{
    spyOn(sharedService, 'getCourseById').and.returnValue(mockData[5]);
    let res = service.getCourseById('6');
    expect(res).toEqual(mockData[5]);
  });

});
