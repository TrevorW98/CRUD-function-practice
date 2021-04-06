import { Injectable } from '@angular/core';
import { Iuser } from 'src/app/Interfaces/iuser';
import { DataService } from '../Data/data.service';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private dService: DataService) { }

  addStudent(studentToAdd:Iuser)
  {
    return this.dService.post("userinfo/add", studentToAdd).subscribe();
  }
}
