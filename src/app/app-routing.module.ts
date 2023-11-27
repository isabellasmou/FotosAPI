import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoTableComponent } from './photo-table/photo-table.component';

const routes: Routes = [
  { path: 'photo/:id', component: PhotoDetailComponent },
  { path: '', component: PhotoTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
