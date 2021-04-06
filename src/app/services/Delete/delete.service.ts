import { Injectable } from '@angular/core';
import { DataService } from '../Data/data.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private dService:DataService) { }

  Delete(id:Number)
  {
    return this.dService.delete("userinfo/update").toPromise();
  }
}
