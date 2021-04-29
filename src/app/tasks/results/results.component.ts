import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/campaign/models/task.model';
import { CompleteTaskService } from '../complete-task/services/complete-task.service';
import { Chart, registerables } from 'chart.js';
import { ThrowStmt } from '@angular/compiler';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public task: Task;
  public task_id: string;
  public charts: Chart[];
  public chartTypes = ['bar', 'pie', 'line', 'doughnut', 'polarArea'];
  public changeChartSelector: FormGroup;

  constructor(private taskService: CompleteTaskService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.task_id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.getTask()
    this.buildChangeChartForm()
  }

  getTask() {
    this.taskService.getTask(this.task_id).subscribe(res => { this.task = res; setTimeout(() => { this.createCharts() }, 500) })
  }

  buildChangeChartForm(){
    this.changeChartSelector = this.fb.group({chartType: ['bar']})
  }

  createCharts() {
    Chart.register(...registerables);
    this.charts = this.task.questions.map((question, i) => { return this.buildChart(i, question) })
    console.log('this.charts:', this.charts)

  }

  buildChart(i, question, type: any = 'bar') {
    const id = `question${i}`
    const labels = question.options ? question.options.split(',') : question.tags.split(',')

    let chart = new Chart(id, {
      type: type,
      data: {
        labels: labels,
        datasets: [{
          label: 'Users',
          data: this.getData(i),
          backgroundColor: this.getBackgrounds(labels),
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
      },
    });

    return chart

  }


  getData(i) {
    console.log(this.task.questions[i].question)

    let question = this.task.questions[i]
    let questionText = question.question
    let options = question.options ? question.options.split(',') : question.tags.split(',')
    let responses = this.task.responses.map(response => response[questionText]).filter(r => r).flat()
    let data = []

    options.forEach(option => {
      data.push(responses.filter(response => response === option).length)
    });

    return data
  }

  changeChart(i) {
    let chart = this.charts[i]
    chart.config.type = this.changeChartSelector.value.chartType || 'bar'
    chart.update()
    console.log('chart:', chart)
  }

  getBackgrounds(labels) {
    let backgrounds = [];

    labels.forEach(label => {
      backgrounds.push(this.random_rgba())
    });

    return backgrounds
  }

  random_rgba() {
    let o = Math.round,
      r = Math.random,
      s = 255;
    return (
      'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + '1' + ')'
    );
  }


}
