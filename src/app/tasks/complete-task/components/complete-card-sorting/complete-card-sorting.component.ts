import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/campaign/models/task.model';
import { CompleteTaskService } from '../../services/complete-task.service';

@Component({
  selector: 'app-complete-card-sorting',
  templateUrl: './complete-card-sorting.component.html',
  styleUrls: ['./complete-card-sorting.component.css']
})
export class CompleteCardSortingComponent implements OnInit {

  @Input() task: Task;
  public cards: string[];
  public categories: string[];
  public result: {} = {};
  public taskPosting: boolean;
  public taskCompleted: boolean;

  constructor(private completeTaskService: CompleteTaskService) { }

  ngOnInit(): void {
    this.cards = this.task.cards
    this.categories = this.task.categories

    this.setCategories()
  }

  setCategories() {
    this.categories.forEach(category => this.result[category] = [])
  }

  onDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
  }

  onDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  onDrop(e) {
    const i = e.dataTransfer.getData('text');
    const draggedCardCopy = this.cards[i]
    const droppedCard = document.createElement('div')
    const category = e.currentTarget;
    const categoryName = category.id;

    if (!draggedCardCopy) return
    e.preventDefault()

    this.result[categoryName].push(draggedCardCopy)

    droppedCard.classList.add('card')
    droppedCard.innerText = draggedCardCopy
    droppedCard.draggable = true
    category.insertAdjacentElement('beforeend', droppedCard)

    this.cards.splice(i, 1)
  }

  onSubmit() {
    this.taskPosting = true;
    this.completeTaskService.postResponse(this.task._id, this.result).subscribe(res=>{
      this.taskCompleted = true;
    })
  }

}
