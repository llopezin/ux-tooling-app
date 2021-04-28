import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-summary',
  templateUrl: './task-summary.component.html',
  styleUrls: ['./task-summary.component.css']
})
export class TaskSummaryComponent implements OnInit {

  @Input() task: Task
  public linkCopied: boolean = false

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => { this.setProgress() }, 500);
  }

  setProgress() {
    let usersRequired = this.task.usersRequired || 10
    let progressBar = document.getElementById(this.task._id)
    let progress = (this.task.responses.length / usersRequired) * 100

    progressBar.style.width = `${progress}%`
    progressBar.style.display = `block`
  }

  copyLinkToClipboard(){
    let textArea = document.getElementById(`link${this.task._id}`) as HTMLInputElement
    textArea.focus();
    textArea.select();
    document.execCommand('copy');

    this.changeButtonMessage()
  }

  changeButtonMessage(){
    this.linkCopied = true
    setTimeout( ()=>{this.linkCopied = false} ,2000)
  }


}
