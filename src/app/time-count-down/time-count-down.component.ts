import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-count-down',
  templateUrl: './time-count-down.component.html',
  styleUrls: ['./time-count-down.component.scss']
})
export class TimeCountDownComponent implements OnInit {

  timer: number;
  startTime: any;

  @Input("t")
  get timer1(){
     return this.timer
  }
  set timer1(value){
    this.timer = value;
  }

  constructor() {
    this.timer = 12;
  }

  ngOnInit(): void {
  }

  start(){
    this.startTime = setInterval(()=>{
      if (this.timer >0){
        this.timer--;
        this.isCountDown();
      }
    }, 1000)
  }

  stop(){
    console.log("ket thuc");
    // this.isCountDown();
    clearInterval(this.startTime);
  }

  @Output()
  finish = new EventEmitter<boolean>();
  isCountDown(){
    if(this.timer == 0){
      this.stop();
      this.finish.emit(true);
    }
  }

}
