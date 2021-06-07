import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-update-tree-test',
  templateUrl: './update-tree-test.component.html',
  styleUrls: ['./update-tree-test.component.css']
})
export class UpdateTreeTestComponent implements OnInit {

  @Output() updateSurvey: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.updateSurvey.emit()
 }
 
}
