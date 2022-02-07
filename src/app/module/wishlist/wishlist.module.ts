import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { WishlistComponent } from 'src/app/container/wishlist/wishlist.component';



@NgModule({
  declarations: [
    WishlistComponent
  ],
  imports: [
    CommonModule,
    SharedModule,    
    RouterModule.forChild([
      { path: '', component: WishlistComponent, pathMatch: 'full' }
    ])
  ]
})
export class WishlistModule { }
