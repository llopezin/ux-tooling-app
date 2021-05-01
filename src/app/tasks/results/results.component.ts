import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/campaign/models/task.model';
import { CompleteTaskService } from '../complete-task/services/complete-task.service';
import { Chart, registerables } from 'chart.js';
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

  buildChangeChartForm() {
    this.changeChartSelector = this.fb.group({ chartType: ['bar'] })
  }

  createCharts() {
    Chart.register(...registerables);
    this.charts = this.task.questions.map((question, i) => { return this.buildChart(i, question) })
  }

  buildChart(i, question, type: any = 'bar') {
    const id = `question${i}`
    const labels = question.options ? question.options.split(',') : question.tags.split(',')
    const scaleOptions = { scales: { y: { beginAtZero: true } } }
    const chartRequiresScale = type === 'bar' || type === 'line'
    const options = chartRequiresScale ? scaleOptions : {}

    const chartObj = {
      type: type,
      data: {
        labels: labels,
        datasets: [{
          label: 'Users',
          data: this.getData(i),
          backgroundColor: this.getBackgrounds(labels),
        }]
      },
      options: options,
    };

    const chart = new Chart(id, chartObj)

    return chart

  }


  getData(i) {
    const question = this.task.questions[i]
    const questionText = question.question
    const options = question.options ? question.options.split(',') : question.tags.split(',')
    const responses = this.task.responses.map(response => response[questionText]).filter(r => r).flat()
    const data = []
    
    options.forEach(option => {
      data.push(responses.filter(response => response === option).length)
    });
    
    return data
  }

  changeChart(i) {
    const currentChart = this.charts[i]
    
    currentChart.destroy()

    const question = this.task.questions[i];
    const chartType = this.changeChartSelector.get('chartType').value
    const chart = this.buildChart(i, question, chartType)

    this.charts[i] = chart
  }

  getBackgrounds(labels) {
    const backgrounds = [];

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
      'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + '0.6' + ')'
    );
  }


}
