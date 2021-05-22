import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-tree-test',
  templateUrl: './create-tree-test.component.html',
  styleUrls: ['./create-tree-test.component.css']
})
export class CreateTreeTestComponent implements OnInit {

  public treeTestForm: FormGroup;
  public headings: any = { zapatos: { deportivas: {}, tacones: {} }, ropa: { camisetas: {}, pantalones: { cortos: {}, largos: {} } } };
  public inputOpened: boolean = false
  public selectedParent: any;
  @ViewChild("mainInput") mainInput: ElementRef;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }
  
  order(a, b) {
    return 1;
  }

  addHeading() {
    let heading = this.treeTestForm.value.heading
    this.headings.push({ [`${heading}`]: [] })
    this.inputOpened = false
  }

  createForm() {
    this.treeTestForm = this.fb.group({
      heading: [""]
    }
    );
  }

  addSibling(e, target) {
    this.inputOpened = true
    let parent = e.target.parentElement.parentElement.parentElement
    
    this.addToParent(parent)
    target?.nativeElement.scrollIntoView()
  }
  
  addChild(e, target) {
    this.inputOpened = true
    let parent = e.target.parentElement.parentElement
    
    this.addToParent(parent)
    target?.nativeElement.scrollIntoView()
  }

  addToParent(parent) {
    const path = []

    while (parent.id != "headings") {
      path.push(parent.id)
      parent = parent.parentElement
    }

    let dataParent = this.headings
    let pathReversed = path.reverse()
    
    pathReversed.forEach(childHeading => { dataParent = dataParent[childHeading] })
    this.selectedParent = dataParent


  }
  
  add(){
    let name = this.treeTestForm.value.heading
    this.selectedParent[name] = {}
  }


}
