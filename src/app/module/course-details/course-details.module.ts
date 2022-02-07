import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CourseDetailsComponent } from 'src/app/container/course-details/course-details.component';
import { CourseDetailsService } from 'src/app/services/course-details/course-details.service';
import { AlertMessageModule } from '../alert-message/alert-message.module';



@NgModule({
  declarations: [
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    AlertMessageModule,
    RouterModule.forChild([
      { path: '', component: CourseDetailsComponent, pathMatch: 'full' }
    ])
  ],
  providers: [ CourseDetailsService ]
})
export class CourseDetailsModule { }
