import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './container/dashboard-container/dashboard-container.component';

const routes: Routes = [
  { path: 'home', component: DashboardContainerComponent },
  { path: 'profile', loadChildren: () => import('./module/profile/profile.module').then(mod => mod.ProfileModule) },
  { path: 'checkout', loadChildren: () => import('./module/checkout/checkout.module').then(mod => mod.CheckoutModule) },
  { path: 'wishlist', loadChildren: () => import('./module/wishlist/wishlist.module').then(mod => mod.WishlistModule) },  
  { path: 'courseDetails/:id', loadChildren: () => import('./module/course-details/course-details.module').then(mod => mod.CourseDetailsModule) },  
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
