import {Component, OnInit, Input} from '@angular/core';
import {Task} from 'src/app/campaign/models/task.model';

@Component({
  selector: 'app-complete-tree-test',
  templateUrl: './complete-tree-test.component.html',
  styleUrls: ['./complete-tree-test.component.css']
})
export class CompleteTreeTestComponent implements OnInit {

  @Input() task: Task
  
  constructor() { }
  
  ngOnInit(): void {
    
    console.log('complete tree taest component initialized');
    console.log('task:', this.task)
    
  }

}
