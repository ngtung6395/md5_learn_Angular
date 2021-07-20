import { IRating } from '../irating';
import { Component, OnInit,Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {


  @Input()
  max=10;
  @Input()
  current=0;


  ratingList: Array<IRating> = []

  constructor() {
  
  }

  ngOnInit(): void {
    this.loadRating();
  }




  loadRating(){
    this.ratingList = Array.from({length: this.max}, (_, index) => ({
      value:index +1,
      active: index<this.current
    }));
  }

  clickChuot(index: number){
    this.current = index+1;
    this.ratingList.forEach((item, idx)=>item.active = idx <this.current);

  }

  diChuyenChuot(index: number){
    this.ratingList.forEach((item, idx)=>item.active = idx <= index);
  }

}
