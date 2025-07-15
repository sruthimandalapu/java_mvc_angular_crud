import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  basicForm=new FormGroup({
      firstName:new FormControl(),
      lastName:new FormControl(),
      email:new FormControl()
  });
  data:any;
  constructor(private userService:UserService,private router:Router){

  }
  onSubmitForm(){
    window.alert("Submitted");
    this.data={
      "firstName":this.basicForm.controls.firstName.value,
      "lastName":this.basicForm.controls.lastName.value,
      "email":this.basicForm.controls.email.value
    };
    console.log(this.data);
    this.userService.addUser(this.data).subscribe({
      next:(data)=>{this.router.navigate(["/view"])}
    });

  }
}
