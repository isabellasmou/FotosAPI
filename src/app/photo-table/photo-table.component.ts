import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { PhotoDetailComponent } from "../photo-detail/photo-detail.component";

@Component({
    selector: 'app-photo-table',
    standalone: true,
    imports: [MatTableModule,
      MatButtonModule,
      MatDialogModule,
      MatCardModule, PhotoDetailComponent],
    templateUrl: './photo-table.component.html',
    styleUrls: ['./photo-table.component.css']
})


export class PhotoTableComponent implements OnInit {
  photos: any[] = [];
  offset: number = 0;
  limit: number = 20;
  selectedPhotoId: number = 0;

  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  nextPage(): void {
    this.offset += this.limit;
    this.loadPhotos();
  }

  prevPage(): void {
    if (this.offset > 0) {
      this.offset -= this.limit;
    }
    this.loadPhotos();
  }

  ngOnInit(): void {
    this.loadPhotos();
  }
  
  loadPhotos(): void {
    this.dataService.getPhotos(this.offset, this.limit).subscribe(response => {
      console.log('Dados recebidos:', response);
      this.photos = response.photos;
    });
  }

  viewDetails(photoId: number): void {
    this.selectedPhotoId = photoId;
    this.dialog.open(this.modalTemplate);
  }

  closeModal(): void {
    this.dialog.closeAll();
  }

}
