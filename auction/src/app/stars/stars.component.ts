<<<<<<< HEAD
import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
=======
///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Component, OnInit, Input, OnChanges} from '@angular/core';
>>>>>>> db8fb0a46254e40d1ad20003f6563fb0b9e789ba

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

    private stars: boolean[];

@Input()
private rating: number = 0;

@Output()
private ratingChange: EventEmitter<number>= new EventEmitter();
@Input()
private readonly: boolean = true;
  constructor() { }
    ngOnChanges(changes: SimpleChanges): void {
        this.stars = [];
        for (let i = 1; i <= 5; i++) {
            this.stars.push(i > this.rating);
        }
    }
  ngOnInit() {
  	  this.stars = [];
  	  for (let i = 1; i <= 5; i++) {
  	  this.stars.push(i > this.rating);
  	}
  	// this.stars=[true,true,true,true,true];
  }

  clickStar(index: number ) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }

  }
}
