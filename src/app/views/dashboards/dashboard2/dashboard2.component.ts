import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: "lightgreen";
  cols: 1;
  rows: 1;
  text: string;
}

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component implements OnInit {

  tiles: Tile[] = [
    {text: '1', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '2', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '3', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '4', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '5', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '6', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '7', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '8', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '9', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '10', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '11', cols: 1, rows: 1, color: 'lightgreen'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
