import { Injectable } from '@angular/core';
import { Iuser } from 'src/app/Interfaces/iuser';
import { DataService } from '../Data/data.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private dService:DataService) { }

  Update(userToUpdate:Iuser)
  {
    return this.dService.post("auth/login", userToUpdate).toPromise();
  }
}
