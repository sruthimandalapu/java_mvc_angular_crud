import { Component } from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute,Router} from '@angular/router';
export interface Users{
  id:string,
  firstName:string,
  lastName:string,
  email:string
}
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  id:any;
  user:Users={
    id:"",
    firstName:"",
    lastName:"",
    email:""
  };
  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute){
  }
  ngOnInit(){
    this.route.paramMap.subscribe(
      (param)=>{this.id=param.get('id');}
    );
    this.userService.getUser(this.id).subscribe(
      (data:Users)=>{this.user=data;this.loadUserData(data);}
    );
  }
  loadUserData(data:Users){
    this.user=data;
  }
  submit(){
    this.userService.editUser(this.user.id,this.user).subscribe({
 next:(data)=>{this.router.navigate(["/view"])}
});
  }
}