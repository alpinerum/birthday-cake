import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
  export class TasksComponent implements OnInit{
    tasks: Task[] = [{
      title: 'String',
      description: 'String',
      date: new Date(2024, 4, 7),
      time: new Date(2024, 4, 7, 14, 0, 0),
      priority_level: 'String',
      category: 'String',
      progress_level: 'any'
    }];
    constructor(private service: TaskServiceService) {
    }
    ngOnInit() {
      //this.service.getTasks().subscribe((result:{tasks[]})=>{
        //this.tasks = result.tasks;
      //});
    }
}
