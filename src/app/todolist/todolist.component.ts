import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

title = "Todolist";
cars = ["Saab", "Volvo", "BMW"];

  ngOnInit() {
  }

}
