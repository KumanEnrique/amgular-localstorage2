import { Injectable } from '@angular/core';

import {Task} from '../models/task'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tasks:Task[]
  constructor() { 
    this.tasks = []
  }

  getTasks():Task[]{
    if(localStorage.getItem('tasks') === null){
      this.tasks = []
    }else{
      this.tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    return this.tasks
  }
  addTask(task:Task):void{
    this.tasks.unshift(task)
    let tasks
    if(localStorage.getItem('tasks') === null){
      tasks = []
      tasks.unshift(task)
      localStorage.setItem('tasks',JSON.stringify(tasks))
    }else{
      tasks = JSON.parse(localStorage.getItem('tasks'))
      tasks.unshift(task)
      localStorage.setItem('tasks',JSON.stringify(tasks))
    }
  }
  //MIN 22.41
  removeTask(task:Task){
    for(let i = 0;i < this.tasks.length;i++){
      if(task == this.tasks[i]){
        this.tasks.splice(i,1)
        localStorage.setItem('tasks',JSON.stringify(this.tasks))
      }
    }
  }
  updateTask(task:Task,title,description){
    console.log(task,title,description)
    for(let i = 0;i < this.tasks.length;i++){
      if(task.id == this.tasks[i].id){
        console.log("service",this.tasks[i])
        let tasks = JSON.parse(localStorage.getItem("tasks"))
        tasks[i] = {id:task.id,title,description,hide:true}
        localStorage.setItem('tasks',JSON.stringify(tasks))
      }
    }
  }
  // helperUpdate(){
  //   let tasks = JSON.parse(localStorage.getItem("tasks"))
  //   tasks.forEach(task => {
  //     if(task.id == this.tasks[i].id){}
  //   });
  // }
}
