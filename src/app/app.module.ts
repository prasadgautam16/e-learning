import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleRibbonComponent } from './components/title-ribbon/title-ribbon.component';
import { DashboardContainerComponent } from './container/dashboard-container/dashboard-container.component';
import { FormsModule } from '@angular/forms';

import { SearchTextFilterPipe } from './pipes/search-text-filter.pipe';
import { SharedModule } from './module/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleRibbonComponent,
    SearchTextFilterPipe,
    DashboardContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
