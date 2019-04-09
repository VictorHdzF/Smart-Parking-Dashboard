import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatGridTile } from '@angular/material';
import { forEach } from '@angular/router/src/utils/collection';


export interface Tile {
  color: "lightgreen";
  cols: 1;
  rows: 1;
  text: string;
  ID: number;
}

export interface Lot {
  occupied: boolean;
  spaceID: number;
  x: number;
  y: number;
} 

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})

@Injectable()
export class Dashboard2Component implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  configUrl = 'http://34.66.27.157/api/v1/occupied';

  lots : Lot[] = [];
  tiles : Tile[] = [];
  
async getConfig() {
    this.httpClient.get(this.configUrl).subscribe((res : Lot[])=>{
    console.log(res);
    this.lots = res;
  });
}

async createTiles(){
  for(var i = 1; i <= 22; i++)
  {
    this.tiles.push({
      color: 'lightgreen',
      cols: 1,
      rows: 1,
      text: i.toString(),
      ID: i,
    })
  }
}

/*async validateData(){
  console.log("hola");
  this.lots.forEach(function (value: { occupied: boolean; spaceID: number; }){
    if(value.occupied){
      this.tiles.forEach(function (value2: { ID: number; color: string; }){
        if(value.spaceID == value2.ID){
          value2.color = "red";
          console.log(value2.ID.toString());
        }
      });
    }
  });
}*/

async validateData(){
  console.log("hola");
  this.lots.forEach(function (value: { occupied: boolean; spaceID: number; }){
    if(value.occupied){
      this.tiles.forEach(function (value2: { ID: number; color: string; }){
        if(value.spaceID == value2.ID){
          value2.color = "red";
          console.log(value2.ID.toString());
        }
      });
    }
  });
}

async ngOnInit() {
  await this.getConfig();
  await this.createTiles();
  await this.validateData();
  }
}
