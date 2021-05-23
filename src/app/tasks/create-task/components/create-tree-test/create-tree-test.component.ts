import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-tree-test',
  templateUrl: './create-tree-test.component.html',
  styleUrls: ['./create-tree-test.component.css']
})
export class CreateTreeTestComponent implements OnInit {

  public treeTestForm: FormGroup;
  public headings: any = {};
  public inputOpened: boolean = true
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

    this.findDataParent(parent)
    target?.nativeElement.scrollIntoView()
    this.mark(e.target.parentElement)
  }

  addChild(e, target) {
    this.inputOpened = true
    let parent = e.target.parentElement.parentElement

    this.findDataParent(parent)
    target?.nativeElement.scrollIntoView()
    this.mark(e.target.parentElement)
  }

  mark(node) {
    node?.classList.add("selected")
  }

  unmark() {
    let selected = document.querySelector(".selected")
    selected?.classList.remove("selected")
  }

  remove(e) {
    let parent = e.target.parentElement.parentElement.parentElement
    let elem = e.target.parentElement.parentElement.id
    let path = this.findPath(parent)


    let dataParent = this.headings
    path.forEach(childHeading => {
      dataParent = dataParent[childHeading]
    })

    delete dataParent[elem]

    if(!this.headings.keys) {this.inputOpened = true; this.selectedParent = {}}
  }

  findDataParent(parent) {
    let dataParent = this.headings

    this.findPath(parent).forEach(childHeading => { dataParent = dataParent[childHeading] })
    this.selectedParent = dataParent
  }

  findPath(parent) {
    const path = []

    while (parent.id != "headings") {
      path.push(parent.id)
      parent = parent.parentElement
    }

    return path.reverse()
  }

  add() {
    let name = this.treeTestForm.value.heading
    if (!this.selectedParent || !this.selectedParent.keys) this.selectedParent = this.headings
    this.selectedParent[name] = {}
    this.inputOpened = false
    this.unmark()
  }




}
