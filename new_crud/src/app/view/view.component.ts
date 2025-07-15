import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  users:any;
  constructor(private userService:UserService,private router:Router){
    userService.viewUser().subscribe((data)=>{this.users=data;console.log(data);console.log(this.users)});
    console.log("User's Data");
    console.log("hi",this.users);
  }
  editClick(userEmail:string){
    window.alert("Invokeddddd");
    this.router.navigate(["/edit",userEmail]);
  }
  deleteClick(userEmail:string){
    // this.userService.deleteUser(userEmail).subscribe({
    //   next:()=>{
        
    //   }});
    this.userService.deleteUser(userEmail).subscribe({
    next: () => {
      alert("Delete is invoked!!");
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/view']);
      });
    },
    error: (err) => {
      console.error("Delete failed:", err);
    }
  });
  }
  addClick(){
    this.router.navigate(["/add"]);
  }
}
