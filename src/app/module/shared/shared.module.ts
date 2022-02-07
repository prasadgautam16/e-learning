import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { CartCardComponent } from 'src/app/components/cart-card/cart-card.component';
import { CourseCardComponent } from 'src/app/components/course-card/course-card.component';

import { SortingListComponent } from 'src/app/components/sorting-list/sorting-list.component';
import { DiscountedPricePipe } from 'src/app/pipes/discounted-price.pipe';
import { AlertMessageModule } from '../alert-message/alert-message.module';



@NgModule({
  declarations: [
    DiscountedPricePipe,
    CartCardComponent,
    CourseCardComponent,
    PaginationComponent,
    SortingListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AlertMessageModule
  ],
  exports: [
    CartCardComponent,
    CourseCardComponent,
    PaginationComponent,
    SortingListComponent
  ]
})
export class SharedModule { }
