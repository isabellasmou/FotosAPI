import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-photo-table',
  templateUrl: './photo-table.component.html',
  styleUrls: ['./photo-table.component.css']
})
export class PhotoTableComponent implements OnInit {
  photos: any[] = [];
  offset: number = 0;
  limit: number = 20;
  isModalOpen: boolean = false;
  selectedPhotoId: number = 0;

  constructor(private dataService: DataService) {}

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
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
