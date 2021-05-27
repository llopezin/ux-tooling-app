import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { treeHeadingValidator } from './validators/tree-heading.validator';


@Component({
  selector: 'app-create-tree-test',
  templateUrl: './create-tree-test.component.html',
  styleUrls: ['./create-tree-test.component.css']
})
export class CreateTreeTestComponent implements OnInit {

  public treeTestForm: FormGroup;
  public treeTestTasksForm: FormGroup;
  public treeCompleted: boolean = false;
  public headings: any = {  };
  public inputOpened: boolean = true
  public selectedParent: any;
  @ViewChild("mainInput") mainInput: ElementRef;
  @Output() createTreetest: EventEmitter<any> = new EventEmitter

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createHeadingsForm()
    this.createTasksForm()
  }

  order(a, b) {
    return 1;
  }

  addHeading() {
    let heading = this.treeTestForm.value.heading
    this.headings.push({ [`${heading}`]: [] })
    this.inputOpened = false
  }

  createHeadingsForm() {
    this.treeTestForm = this.fb.group({
      heading: [""],
    }
    );
  }

  createTasksForm() {
    this.treeTestTasksForm = this.fb.group({
      instructions: [""],
      tasks: this.fb.array([this.newTask()])
    }
    );
  }

  addTask() {
    this.treeTasks.push(this.newTask())
  }

  newTask(): FormGroup {
    return this.fb.group({
      task: ["", [Validators.required]],
      answer: ["", [Validators.required]],
    });
  }

  addSibling(e, target) {
    this.inputOpened = true
    let parent = e.target.parentElement.parentElement.parentElement

    this.findDataParent(parent)
    target?.nativeElement.scrollIntoView()
    this.mark(e.target.parentElement)
    this.treeTestForm.reset()
  }

  addChild(e, target) {
    this.inputOpened = true
    let parent = e.target.parentElement.parentElement

    this.findDataParent(parent)
    target?.nativeElement.scrollIntoView()
    this.mark(e.target.parentElement)
    this.treeTestForm.reset()
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

    if (Object.keys(this.headings).length === 0) this.reset()
  }

  reset() {
    this.inputOpened = true
    this.selectedParent = this.headings
    this.treeTestForm.reset()
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
    if (!this.selectedParent) this.selectedParent = this.headings
    this.selectedParent[name] = {}
    this.inputOpened = false
    this.unmark()
  }

  createTask() {
    this.createTreetest.emit({ 
      headings: this.headings,
      instructions: this.treeTestTasksForm.value.instructions, 
      tasks: this.treeTestTasksForm.value.tasks
     })
  }

  get treeTasks() {
    return this.treeTestTasksForm.get('tasks') as FormArray;
  }

}
