import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {

  @Input() photoId: number = 0;
  photoDetails: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    if (this.photoId) {
      this.dataService.getPhotoDetails(this.photoId).subscribe(data => {
        this.photoDetails = data.photo;
        console.log(this.photoDetails);
      });
    }
  }
}
