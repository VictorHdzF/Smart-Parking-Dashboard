import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Tile {
  color: "lightgreen";
  cols: 1;
  rows: 1;
  text: string;
}

export interface Config {
  occupied: string;
  spaceID: string;
}

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})

@Injectable()
export class Dashboard2Component implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  configUrl = '/../../../../assets/config.json';

getConfig() {
  return this.http.get(this.configUrl);
}

config: Config;

showConfig() {
  this.getConfig()
    .subscribe((data: Config) => this.config = {
        occupied:  data['occupied'],
        spaceID: data['spaceID']
    });
}

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

}
