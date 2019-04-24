import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'q';
//import { MatGridTile } from '@angular/material';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
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

  ytUrl = 'http://34.66.27.157/api/v1/occupied/?parking=youtube';
  a1Url = 'http://34.66.27.157/api/v1/occupied/?parking=a1';

  ytLots : Lot[] = [];
  a1Lots : Lot[] = [];
  ytTiles : Tile[] = [];
  a1Tiles : Tile[] = [];
  
async getYt() {
    this.httpClient.get(this.ytUrl).subscribe((res : Lot[])=>{
    this.ytLots = res;
  });
}

async getA1() {
  this.httpClient.get(this.a1Url).subscribe((res : Lot[])=>{
  this.a1Lots = res;
});
}

async createTiles(){
  for(var i = 1; i <= 22; i++)
  {
    this.ytTiles.push({
      color: 'lightgreen',
      cols: 1,
      rows: 1,
      text: i.toString(),
      ID: i,
    })
  }
  for(var i = 1; i <= 31; i++)
  {
    this.a1Tiles.push({
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
  for(var j = 0; j < this.ytLots.length; j++){
    if(this.ytLots[j].occupied){
      for(var k = 0; k < this.ytTiles.length; k++){
        if(this.ytLots[j].spaceID == this.ytTiles[k].ID ){
          this.ytTiles[k].color = "red";
        }
      }
    }
  }
  for(var j = 0; j < this.a1Lots.length; j++){
    if(this.a1Lots[j].occupied){
      for(var k = 0; k < this.ytTiles.length; k++){
        if(this.a1Lots[j].spaceID == this.a1Tiles[k].ID ){
          this.a1Tiles[k].color = "red";
        }
      }
    }
  }
}

async ngOnInit() {
  await this.getYt();
  await this.getA1();
  await this.createTiles();
  await delay(5000);
  this.validateData();
  }
}
