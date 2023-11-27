import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PhotoTableComponent } from './photo-table/photo-table.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoTableComponent,
    PhotoDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
