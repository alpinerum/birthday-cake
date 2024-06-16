import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  @Input()task!: Task;
  constructor(private service: TaskServiceService) {
    service = new TaskServiceService;
    this.task = service.getTasks();
  }

  ngOnInit() {
    
  }

}
