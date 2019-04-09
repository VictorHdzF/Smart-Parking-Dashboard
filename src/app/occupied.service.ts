import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export interface Lot {
  occupied: boolean;
  spaceID: number;
  x: number;
  y: number;
} 

@Injectable({
  providedIn: 'root'
})
export class OccupiedService {
  
  private occupiedUrl = 'http://34.66.27.157/api/v1/occupied';

  constructor(private http: Http) { }

  async getOccupied(): Promise<Lot> {
    const response = await this.http.get(this.occupiedUrl).toPromise();
    return response.json()
  }
}
