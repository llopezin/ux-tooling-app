import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/campaign/models/task.model';

@Component({
  selector: 'app-complete-card-sorting',
  templateUrl: './complete-card-sorting.component.html',
  styleUrls: ['./complete-card-sorting.component.css']
})
export class CompleteCardSortingComponent implements OnInit {

  @Input() task: Task;

  constructor() { }

  ngOnInit(): void {
    console.log(this.task);

  }

  onDragStart(e) {
    console.log("onDragStart fired")
    e
    .dataTransfer
    .setData('text/plain', e.target.id);

  e
    .currentTarget
    .style
    .backgroundColor = 'yellow';
  }

  onDragOver(e){
    console.log('onDragOver')
    console.log('e:', e)

  }


}
