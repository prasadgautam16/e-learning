import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from '../../components/profile/profile.component';
import { AlertMessageModule } from '../alert-message/alert-message.module';



@NgModule({
  declarations: [ ProfileComponent ],
  imports: [
    CommonModule,
    FormsModule,
    AlertMessageModule,
    RouterModule.forChild([
      { path: '', component: ProfileComponent, pathMatch: 'full' }
    ])
  ]
})
export class ProfileModule {}
