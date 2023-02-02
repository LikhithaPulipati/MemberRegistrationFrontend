import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemberPayload } from 'src/models/member.payload';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  
  private signup_url: string = "http://localhost:8092/registerNewMember";
 // private signup_url: string = "http://ec2-3-111-186-132.ap-south-1.compute.amazonaws.com:8083/registerNewUser";

  constructor(private http:HttpClient) { }

  signup(memberPayload:MemberPayload){
    console.log("Created Signup URL : ",this.signup_url);
    return this.http.post(this.signup_url,memberPayload);
  }

}
