import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

 numberOfLike : number = 0;

 likeButtonClick() {
  this.numberOfLike++;
 }

 dislikeButtonClick() {
  this.numberOfLike--;
 }

}
