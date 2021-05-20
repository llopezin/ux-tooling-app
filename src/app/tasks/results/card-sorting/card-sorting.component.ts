import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/campaign/models/task.model';
import { CompleteTaskService } from '../../complete-task/services/complete-task.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-card-sorting',
  templateUrl: './card-sorting.component.html',
  styleUrls: ['./card-sorting.component.css']
})
export class CardSortingComponent implements OnInit {

  public task: Task;
  public task_id: string;
  public result: {} = {}


  constructor(private taskService: CompleteTaskService, private route: ActivatedRoute) {
    this.task_id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.getTask()

  }

  getTask() {
    this.taskService.getTask(this.task_id).subscribe(res => { this.task = res; this.setResults(); setTimeout(() => { this.buildChart() }, 1000) })
  }

  setResults() {
    this.combineResponses()
    this.countResponses()
  }

  buildChart() {
    Chart.register(...registerables);

    new Chart('chart', {
      type: 'bar',
      data: {
        labels: Object.keys(this.result),
        datasets: this.buildDatasets()
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
      }
    });

  }

  combineResponses() {
    this.task.responses.forEach(response => {

      for (let key in response) {
        this.result[key]
          ? this.result[key] = [...this.result[key], ...response[key]]
          : this.result[key] = response[key]
      }

    })
  }

  countResponses() {
    for (let categiory in this.result) {
      this.result[categiory] = this.countInstances(this.result[categiory])
    }
  }

  getPercentage(usersCount) {
    return usersCount / (this.task.responses.length / 100)
  }

  buildDatasets() {
    const datasets = []
    const newDataset = (label, data, backgroundColor) => ({ label, data, backgroundColor, grouped: true, skipNull: true, barThickness: 30, borderColor: "transparent", borderWidth: 2 })

    this.task.cards.forEach(card => {
      const data = []
      for (let category in this.result) { data.push(this.result[category][card] || null) }

      datasets.push(newDataset(card, data, this.random_rgba()))
    })

    console.log('datasets:', datasets)
    return datasets
  }

  countInstances(arr) {
    return arr.reduce((obj, e) => {
      obj[e] = (obj[e] || 0) + 1;
      return obj;
    }, {})
  };

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
      'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + '1' + ')'
    );
  }

}
