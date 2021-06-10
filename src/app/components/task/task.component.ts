import { Component, OnInit,Input } from '@angular/core';

import {Task} from '../../models/task'
import {DataService} from '../../services/data.service'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input('task')task:Task
  tasks :Task[]
  title:string
  description:string
  constructor(public dataService:DataService) { }

  ngOnInit() {
  }

  editTask(task){
    task.hide = !task.hide
    this.title = task.title
    this.description = task.description
    // console.log("edit")
  }
  deleteTask(task){
    this.dataService.removeTask(task)
  }
  updateTask(task:Task){
    // console.log(this.title,this.description)
    this.dataService.updateTask(task,this.title,this.description)
    // console.log(22)
  }
}
