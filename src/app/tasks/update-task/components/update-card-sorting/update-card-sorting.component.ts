import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-update-card-sorting',
  templateUrl: './update-card-sorting.component.html',
  styleUrls: ['./update-card-sorting.component.css']
})
export class UpdateCardSortingComponent implements OnInit {

  @Output() updateSurvey: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.updateSurvey.emit()
 }

}
