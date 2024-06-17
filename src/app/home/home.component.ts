import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  photo: String = "https://png.pngtree.com/png-vector/20190628/ourmid/pngtree-task-icon-for-your-project-png-image_1521140.jpg"
  constructor(){}

  ngOnInit(){}
}
