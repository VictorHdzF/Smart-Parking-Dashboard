import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'q';
//import { MatGridTile } from '@angular/material';

export interface Tile {
  color: string;
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

validateData = async() =>{
  console.log("sync")
  for(var j = 0; j < this.lots.length; j++){
    if(this.lots[j].occupied){
      for(var k = 0; k < this.tiles.length; k++){
        if(this.lots[j].spaceID == this.tiles[k].ID ){
          this.tiles[k].color = "red";
        }
      }
    }
  }
}

async ngOnInit() {
  await this.getConfig();
  await this.createTiles();
  await delay(1600);
  this.validateData();
  }
}
