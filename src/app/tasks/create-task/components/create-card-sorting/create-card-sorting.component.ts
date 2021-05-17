import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from 'src/app/app.reducers';

@Component({
  selector: 'app-create-card-sorting',
  templateUrl: './create-card-sorting.component.html',
  styleUrls: ['./create-card-sorting.component.css']
})
export class CreateCardSortingComponent implements OnInit {

    public newCardSortingForm: FormGroup;
    public categories: string[] = [];
    public cards: string[] = []
    public instructionsCopy = "Please, assign the following cards to the category you believe they should belong to"
    @Output() createCardSorting: EventEmitter<any> = new EventEmitter();
    
    constructor(private fb: FormBuilder, private store: Store<AppState>) {
    }
    
    ngOnInit(): void {
      this.createForm()
    }
  
    createForm() {
      this.newCardSortingForm = this.fb.group({
        instructions: [ this.instructionsCopy, [Validators.required]],
        category: ["", [Validators.required]],
        card: ["", [Validators.required]], 
      }
      );
    }

    addCategory(){
      let category = this.newCardSortingForm.value.category
      if(!category)return
      this.categories.push(category)
      this.newCardSortingForm.patchValue({category: ""})
    }

    addCard(){
      let card = this.newCardSortingForm.value.card
      if(!card)return
      this.cards.push(card)
      this.newCardSortingForm.patchValue({card: ""})
    }


    onSubmit() {
      let instructions = this.newCardSortingForm.get('instructions').value
      let {categories, cards} = this
      if(!categories || !cards)return;

      this.createCardSorting.emit({categories, cards, instructions})
    }
    
    deleteCategory(i) {
      this.categories.splice(i, 1)
    }
    
    deleteCard(i) {
      this.cards.splice(i, 1)    }
  }

