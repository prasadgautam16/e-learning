import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { CartCardComponent } from './cart-card.component';
import { DiscountedPricePipe } from '../../pipes/discounted-price.pipe';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Subject, Subscription } from 'rxjs';
import { By } from '@angular/platform-browser';

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

describe('CartCardComponent', () => {
  let component: CartCardComponent;
  let fixture: ComponentFixture<CartCardComponent>;
  let cartCardComponent: CartCardComponent;
  let sharedService : SharedService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        CartCardComponent, 
        DiscountedPricePipe,
      ], 
      providers: [
        SharedService
      ]
    }).overrideComponent(CartCardComponent, {
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
    fixture = TestBed.createComponent(CartCardComponent);
    cartCardComponent = fixture.componentInstance;
    sharedService = TestBed.get(SharedService);
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    cartCardComponent.ngOnInit();
    expect(cartCardComponent).toBeTruthy();
    expect(cartCardComponent.addToCartCourseList).toEqual(mockData);
    expect(cartCardComponent.totalPrice).toEqual(1000);
    expect(cartCardComponent.subscriptionForListUpdate).toBeDefined();
  }));


  // it('should ngOnDestroy', fakeAsync(() => {
  //   component.subscriptionForListUpdate = new Subscription();

  //   spyOn(component.subscriptionForListUpdate, 'unsubscribe');
  //   component.ngOnDestroy();

  //   expect(component.subscriptionForListUpdate.unsubscribe()).toHaveBeenCalledTimes(1);
  // }));

  it('call fetchAddToCartList()', () => {
    let getAddToCartCourseListSpy = spyOn(sharedService, 'getAddToCartCourseList').and.returnValue(mockData);
    cartCardComponent.fetchAddToCartList();
    expect(cartCardComponent.addToCartCourseList).toEqual(mockData);
  });

  it('call calculateTotalPrice()', () => {
    cartCardComponent.calculateTotalPrice();
    expect(cartCardComponent.totalPrice).toEqual(1000);
  });

  it(
    'verify html',
    waitForAsync(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const displayElements = fixture.debugElement.queryAll(By.css('h6'));
        displayElements.forEach((element, index) => {
          expect(element.nativeElement.textContent).toBe(
            'YOUR CART DETAILS'
          );
        });
        const totalPrice = fixture.debugElement.queryAll(By.css('p.total-price'));
        totalPrice.forEach((element, index) => {
          expect(element.nativeElement.textContent).toBe('Rs 1000/- ');
        });
      });
    })
  );
});
