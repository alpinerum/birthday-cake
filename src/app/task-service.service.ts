import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }

  getTasks() {
    //const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': '[[application/json'});
    //const options = (headers: headers)

    //return this.http.get('Http://localhost:3000/tasks/get_all', options);
    return {
      title: 'Review the Angular directives',
      description: 'Random text',
      priority_level: 'high',
      date: new Date(2024, 4, 7),
      time: new Date(2024, 4, 7, 14, 0, 0),
      category: 'random',
      progress_level: 'not started'
    };
  }
}
