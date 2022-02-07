import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';
import { Constant } from 'src/app/data/constant';

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
describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedService);
    service.courseList = [...mockData];
    service.searchList = [...mockData];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCoursesByPage with no argument', ()=>{
    let getAddToCartCourseListSpy = spyOn(service, 'getAddToCartCourseList').and.returnValue(mockData);
    let getWishListSPy = spyOn(service, 'getWishList').and.returnValue(mockData);
    let res = service.getCoursesByPage();
    expect(res).toEqual(mockData.slice(0,5));
  });

  it('getCoursesByPage for dashBoard', ()=>{
    let getAddToCartCourseListSpy = spyOn(service, 'getAddToCartCourseList').and.returnValue(mockData);
    let getWishListSPy = spyOn(service, 'getWishList').and.returnValue(mockData);
    let res = service.getCoursesByPage(1,"dashboard",6);
    expect(res).toEqual(mockData);
  });

  it('getCoursesByPage for checkout', ()=>{
    let getAddToCartCourseListSpy = spyOn(service, 'getAddToCartCourseList').and.returnValue(mockData);
    let getWishListSPy = spyOn(service, 'getWishList').and.returnValue(mockData);
    let res = service.getCoursesByPage(1,"checkout",6);
    expect(res).toEqual(mockData);
  });

  it('getCoursesByPage for wishlist', ()=>{
    let getAddToCartCourseListSpy = spyOn(service, 'getAddToCartCourseList').and.returnValue(mockData);
    let getWishListSPy = spyOn(service, 'getWishList').and.returnValue(mockData);
    let res = service.getCoursesByPage(1,"wishlist",6);
    expect(res).toEqual(mockData);
  });

  it('getCoursesByPage for search', ()=>{
    let getAddToCartCourseListSpy = spyOn(service, 'getAddToCartCourseList').and.returnValue(mockData);
    let getWishListSPy = spyOn(service, 'getWishList').and.returnValue(mockData);
    let res = service.getCoursesByPage(1,"search",6);
    expect(res).toEqual(mockData);
  });

  it('getCoursesByPage for asdfasdfasdf', ()=>{
    let getAddToCartCourseListSpy = spyOn(service, 'getAddToCartCourseList').and.returnValue(mockData);
    let getWishListSPy = spyOn(service, 'getWishList').and.returnValue(mockData);
    let res = service.getCoursesByPage(1,"asdfasdf",6);
    expect(res).toEqual([]);
  });

  it('getLengthOfCourseList', ()=>{
    let res = service.getLengthOfCourseList();
    expect(res).toEqual(6);
  });

  it('calling settingCourseList', ()=> {
    service.settingCourseList(mockData);
    expect(service.courseList).toEqual(mockData);
  });

  it('calling searchFilter with string Java', ()=> {
    service.searchFilter("Java");
    expect(service.searchList).toEqual(mockData);
  });

  it('calling searchFilter with string Angular expecting zero', ()=> {
    service.searchFilter("Angular");
    expect(service.searchList).toEqual([]);
  });


  it('calling getFullList', ()=> {
    service.constCourseList = mockData;
    let res = service.getFullList();
    expect(res).toEqual(mockData);
  });

  it('calling getLatestCourseList', ()=> {
    let res = service.getLatestCourseList();
    expect(res).toEqual(mockData);
  });

  it('calling getCourseById', ()=> {
    let res = service.getCourseById('1');
    expect(res).toEqual(mockData[0]);
  });

  it('calling getAddToCartCourseList', ()=> {
    let arr = [{
      "id": "1",
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
    },{
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
    }];
    service.courseList = arr;
    let res = service.getAddToCartCourseList();
    expect(res).toEqual(arr.slice(1,2));
  });

  it('calling getWishList', ()=> {
    let arr = [{
      "id": "1",
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
    },{
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
    }];
    service.courseList = arr;
    let res = service.getWishList();
    expect(res).toEqual(arr.slice(1,2));
  });
  
  it('calling getSearchList', ()=> {
    let res = service.getSearchList();
    expect(res).toEqual(mockData);
  });
  
  it('calling addToCart', ()=> {
    expect(service.courseList[5].isAddToCart).toEqual(false);

    let res = service.addToCart('6');
    expect(service.courseList[5].isAddToCart).toEqual(true);
    expect(res).toEqual(Constant.ADDED_TO_CART_SUCCESSFULLY);

  });

  it('calling addToCart', ()=> {
    expect(service.courseList[1].isAddToCart).toEqual(true);

    let res = service.addToCart('1');
    expect(service.courseList[1].isAddToCart).toEqual(true);
    expect(res).toEqual(Constant.COURSE_ALREADY_EXIST_IN_CART);

  });

  it('calling addToWishlist success', ()=> {
    service.courseList = [{
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
    }];
    expect(service.courseList[0].isWishList).toEqual(false);

    let res = service.addToWishlist('1');
    expect(service.courseList[0].isWishList).toEqual(true);
    expect(res).toEqual(Constant.ADDED_TO_WISHLIST_SUCCESSFULLY);

  });

  it('calling addToWishlist fail scenario', ()=> {
    service.courseList = [{
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
    }];
    expect(service.courseList[0].isWishList).toEqual(true);

    let res = service.addToWishlist('1');
    expect(service.courseList[0].isWishList).toEqual(true);
    expect(res).toEqual(Constant.COURSE_ALREADY_EXIST_IN_WISHLIST);
  });

  it('calling removeFromCart exist', ()=> {
    service.courseList = [{
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
    }];
    expect(service.courseList[0].isAddToCart).toEqual(true);

    let res = service.removeFromCart('1');
    expect(service.courseList[0].isAddToCart).toEqual(false);
    expect(res).toEqual(Constant.REMOVED_FROM_CART_SUCCESSFULLY);

  });

  it('calling removeFromCart not exist', ()=> {
    service.courseList = [{
      "id": "1",
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
    }]
    expect(service.courseList[0].isAddToCart).toEqual(false);

    let res = service.removeFromCart('1');
    expect(service.courseList[0].isAddToCart).toEqual(false);
    expect(res).toEqual(Constant.COURSE_NOT_EXIST_IN_CART);
  });

  it('calling removeFromWishlist exist', ()=> {
    service.courseList = [{
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
    }];
    expect(service.courseList[0].isWishList).toEqual(true);

    let res = service.removeFromWishlist('1');
    expect(service.courseList[0].isWishList).toEqual(false);
    expect(res).toEqual(Constant.REMOVED_FROM_WISHLIST_SUCCESSFULLY);

  });

  it('calling removeFromWishlist not exist', ()=> {
    service.courseList = [{
      "id": "1",
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
    }]
    expect(service.courseList[0].isWishList).toEqual(false);

    let res = service.removeFromWishlist('1');
    expect(service.courseList[0].isWishList).toEqual(false);
    expect(res).toEqual(Constant.COURSE_NOT_EXIST_IN_WISHLIST);
  });

  it('calling sortCourseList with id', ()=> {
    service.courseList = [{
      "id": "2",
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
    },{
      "id": "1",
      "courseCreator": "Steve",
      "courseDescription": "Thisisastartercourseforshieldhandling",
      "discount": 10,
      "discountValidTill": "2022-04-28T01:30:00.000Z",
      "price": 333,
      "tags": ["Java"],
      "title": "Learning Java 8 2021",
      "isWishList": false,
      "isAddToCart": false,
      "isPurchased": false
    },{
      "id": "3",
      "courseCreator": "Steve",
      "courseDescription": "Thisisastartercourseforshieldhandling",
      "discount": 10,
      "discountValidTill": "2022-04-28T01:30:00.000Z",
      "price": 243,
      "tags": ["Java"],
      "title": "Learning Java 8 2021",
      "isWishList": false,
      "isAddToCart": false,
      "isPurchased": false
    }];

    service.sortCourseList('id');
    expect(service.courseList[0].id).toEqual('1');
  });
  it('calling sortCourseList with id', ()=> {
    service.courseList = [{
      "id": "2",
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
    },{
      "id": "1",
      "courseCreator": "Steve",
      "courseDescription": "Thisisastartercourseforshieldhandling",
      "discount": 10,
      "discountValidTill": "2022-04-28T01:30:00.000Z",
      "price": 333,
      "tags": ["Java"],
      "title": "Learning Java 8 2021",
      "isWishList": false,
      "isAddToCart": false,
      "isPurchased": false
    },{
      "id": "3",
      "courseCreator": "Steve",
      "courseDescription": "Thisisastartercourseforshieldhandling",
      "discount": 10,
      "discountValidTill": "2022-04-28T01:30:00.000Z",
      "price": 243,
      "tags": ["Java"],
      "title": "Learning Java 8 2021",
      "isWishList": false,
      "isAddToCart": false,
      "isPurchased": false
    }];

    service.sortCourseList('desc');
    expect(service.courseList[0].id).toEqual('2');
  });

  it('calling sortCourseList with id', ()=> {
    service.courseList = [{
      "id": "2",
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
    },{
      "id": "1",
      "courseCreator": "Steve",
      "courseDescription": "Thisisastartercourseforshieldhandling",
      "discount": 10,
      "discountValidTill": "2022-04-28T01:30:00.000Z",
      "price": 333,
      "tags": ["Java"],
      "title": "Learning Java 8 2021",
      "isWishList": false,
      "isAddToCart": false,
      "isPurchased": false
    },{
      "id": "3",
      "courseCreator": "Steve",
      "courseDescription": "Thisisastartercourseforshieldhandling",
      "discount": 10,
      "discountValidTill": "2022-04-28T01:30:00.000Z",
      "price": 243,
      "tags": ["Java"],
      "title": "Learning Java 8 2021",
      "isWishList": false,
      "isAddToCart": false,
      "isPurchased": false
    }];

    service.sortCourseList('asc');
    expect(service.courseList[0].id).toEqual('3');
  });

  it('calling calculateTotalPrice with discount', ()=> {
    let priceArr = [{
      "id": "1",
      "courseCreator": "Steve",
      "courseDescription": "Thisisastartercourseforshieldhandling",
      "discount": 10,
      "discountValidTill": "2022-04-28T01:30:00.000Z",
      "price": 1000,
      "tags": ["Java"],
      "title": "Learning Java 8 2021",
      "isWishList": false,
      "isAddToCart": false,
      "isPurchased": false
    }]
    spyOn(service, 'getAddToCartCourseList').and.returnValue(priceArr);

    let res = service.calculateTotalPrice();
    expect(res).toEqual(900);
  });

  it('calling calculateTotalPrice with discount', ()=> {
    let priceArr = [{
      "id": "1",
      "courseCreator": "Steve",
      "courseDescription": "Thisisastartercourseforshieldhandling",
      "discount": 10,
      "discountValidTill": "2020-04-28T01:30:00.000Z",
      "price": 1000,
      "tags": ["Java"],
      "title": "Learning Java 8 2021",
      "isWishList": false,
      "isAddToCart": false,
      "isPurchased": false
    }]
    spyOn(service, 'getAddToCartCourseList').and.returnValue(priceArr);

    let res = service.calculateTotalPrice();
    expect(res).toEqual(1000);
  });
});
