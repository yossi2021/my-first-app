import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})
export class ListitemComponent implements OnInit {

  constructor() { }

  @Input()item="test";

  ngOnInit() {
  }

}
