import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from '../edit/edit.component';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  public getUser(userEmail:string){
    console.log("Get user is invoked",userEmail);
    return this.http.get<Users>(`http://localhost:3000/user/${userEmail}`);
  }
  public addUser(data:any){
    console.log("Invoked");
    console.log(data);
    return this.http.post("http://localhost:3000/user",data);
  }
  public editUser(userEmail:string,data:any){
    console.log("Edit User is Invoked");
    return this.http.put(`http://localhost:3000/user/${userEmail}`,data);
  }
  public viewUser(){
    return this.http.get("http://localhost:3000/user");
  }
  public deleteUser(userId:string){
    return this.http.delete(`http://localhost:3000/user/${userId}`);
  }

}
