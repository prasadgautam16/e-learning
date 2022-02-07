import { TestBed } from '@angular/core/testing';
import { SharedService } from '../shared/shared.service';

import { CheckoutService } from './checkout.service';

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
describe('CheckoutService', () => {
  let service: CheckoutService;
  let sharedService: SharedService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    sharedService = TestBed.inject(SharedService);
    service = TestBed.inject(CheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('calling getAnyTwoRecommendedCourses ', ()=>{
    spyOn(sharedService, 'getFullList').and.returnValue(mockData);
    let res = service.getAnyTwoRecommendedCourses();
    expect(res).toEqual(mockData.slice(0,2));
  });

  it('calling removeAllFromCart ', ()=>{
    spyOn(sharedService, 'getLatestCourseList').and.returnValue(mockData);
    let setSpy = spyOn(sharedService, 'settingCourseList');

    service.removeAllFromCart();

    expect(setSpy).toHaveBeenCalled();
  });
});
