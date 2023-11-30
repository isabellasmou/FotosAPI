import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-photo-detail',
  standalone: true,
  imports: [ CommonModule, MatCardModule],
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {

  @Input() photoId: number = 0;
  photoDetails: any = null;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    if (this.photoId) {
      this.dataService.getPhotoDetails(this.photoId).subscribe(data => {
        this.photoDetails = data.photo;
        console.log(this.photoDetails);
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['photoId'] && this.photoId) {
      this.loadPhotoDetails();
    }
  }
  
  loadPhotoDetails(): void {
    this.dataService.getPhotoDetails(this.photoId).subscribe(data => {
      this.photoDetails = data.photo;
      console.log(this.photoDetails);
    });
  }

}
