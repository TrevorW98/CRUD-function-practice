import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/Interfaces/iuser';
import { AddService } from 'src/app/services/Add/add.service';
import { DeleteService } from 'src/app/services/Delete/delete.service';
import { GetService } from 'src/app/services/Get/get.service';
import { LoginService } from 'src/app/services/Login/login.service';
import { UpdateService } from 'src/app/services/Update/update.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  StudentOBJ:Iuser={
    id:0,
    firstName:"Trevor",
    lastName:"Womack",
    userName:"Tmoney",
    password:"password"
  }

  constructor(private aService:AddService,
              private gService:GetService,
              private lService:LoginService,
              private uService:UpdateService,
              private dService:DeleteService) { }

  ngOnInit(): void {
  }
  
  //Create
  addStudent()
  {
    this.aService.addStudent(this.StudentOBJ).then(
      (res: any) => {
        console.log(res);
      }
    )
  }

  //Read
  getStudents()
  {
    this.gService.getStudent().then(
      (res: any) => {
        console.log(res);
      }
    )
  }

  login()
  {
    this.lService.Login(this.StudentOBJ).then(
      (res:any) => {
        console.log(res);
      }
    )
  }

  //Update
  updateUser()
  {
    this.uService.Update(this.StudentOBJ).then(
      (res:any) => {
        console.log(res)
      }
    )
  }

  // Delete
  deleteUser()
  {
    this.dService.Delete(16).then(
      (res:any) => {
        console.log(res)
      }
    )
  }

}
