import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import {Task} from '../../models/task'
import {DataService} from '../../services/data.service'

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  title:string
  description:string
  // tasks
  @Output() taskAdded = new EventEmitter<Task>()
  constructor(public dataService:DataService) { }

  ngOnInit() {
    // this.tasks = this.dataService.getTasks()
    // console.log("oninit",this.tasks)
  }

  addTask(){
    this.taskAdded.emit({
      title:this.title,
      description:this.description,
      hide:true,
      id:this.dataService.tasks.length + 1
    })
    this.title = ''
    this.description = ""
    return false
  }
}
