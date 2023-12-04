import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttractionListComponent } from './list/list.component';
import { AttractionDetailComponent } from './detail/detail.component';
import { AttractionFormComponent } from './form/form.component';
import { AttractionInfoDirective } from './info.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AttractionListComponent,
    AttractionDetailComponent,
    AttractionFormComponent,
    AttractionInfoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
