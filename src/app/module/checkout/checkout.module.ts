import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from 'src/app/container/checkout/checkout.component';
import { SharedModule } from '../shared/shared.module';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';
import { AlertMessageModule } from '../alert-message/alert-message.module';



@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlertMessageModule,
    RouterModule.forChild([
      { path: '', component: CheckoutComponent, pathMatch: 'full' }
    ])
  ],
  providers: [ CheckoutService ]
})
export class CheckoutModule { }
