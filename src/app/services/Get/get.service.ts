import { Injectable } from '@angular/core';
import { DataService } from '../Data/data.service';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private dService:DataService) { }

  getStudent(){
    return this.dService.get("userinfo").toPromise();
  }
}
