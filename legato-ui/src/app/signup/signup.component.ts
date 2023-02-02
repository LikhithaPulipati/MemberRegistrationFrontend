import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MemberPayload } from 'src/models/member.payload';
import { JwtResponse } from 'src/models/jwt.response';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  message: string = ""
  credentialsForm: FormGroup
  constructor(private _signupService: SignupService, private router: Router) {

        this.credentialsForm = new FormGroup({
          memberid: new FormControl("", [Validators.required]),
          name: new FormControl("", [Validators.required]),
          address: new FormControl("", [Validators.required]),
          state: new FormControl("", [Validators.required]),
          country: new FormControl("", [Validators.required]),
          email: new FormControl("", [Validators.required]),
          pan: new FormControl("", [Validators.required]),
          contact: new FormControl("", [Validators.required]),
          dob: new FormControl("", [Validators.required]),
          password: new FormControl("", [Validators.required]),
          dpOne: new FormControl("", [Validators.required]),
          dpOneDob: new FormControl("", [Validators.required]),
          dpTwo: new FormControl("", [Validators.required]),
          dpTwoDob: new FormControl("", [Validators.required]),
          
    })
  }
  
  ngOnInit(): void {
    localStorage.clear();
  }

  // signup(memberid: number,name:string,address:string, 
  //   state: string,country:string,email:string,pan:string, contact: Number,dob:Date,password:string,
  //   dpOne:string,dpOneDob:Date,dpTwo:string,dpTwoDob:Date)
  signup() {
    var memberPayload: MemberPayload = {
      id:this.credentialsForm.value.memberid,
    name:this.credentialsForm.value.name,
    address: this.credentialsForm.value.address,
    state:this.credentialsForm.value.state,
    country:this.credentialsForm.value.country,
    email:this.credentialsForm.value.email,
    pan:this.credentialsForm.value.pan,
    contactNo:this.credentialsForm.value.contact,
    dob:this.credentialsForm.value.dob,
    password:this.credentialsForm.value.password,
    dependentOne:this.credentialsForm.value.dpOne,
    dependentOneDob:this.credentialsForm.value.dpOneDob,
    dependentTwo:this.credentialsForm.value.dpTwo,
    dependentTwoDob:this.credentialsForm.value.dpTwoDob
     
    //   id:memberid,
    // name:name,
    // address: address,
    // state:state,
    // country:country,
    // email:email,
    // pan:pan,
    // contactNo:contact,
    // dob:dob,
    // password:password,
    // dependentOne:dpOne,
    // dependentOneDob:dpOneDob,
    // dependentTwo:dpTwo,
    // dependentTwoDob:dpTwoDob
    }
    this._signupService.signup(memberPayload).subscribe({
      next: (res: any) => {
        if (!!res.statusCode) {
          alert(res.message)
        } else {
          var jwt: JwtResponse = res
          // localStorage.setItem('token', jwt.jwtToken)
          // localStorage.setItem('loggedInUser', credentialPayload.userName)
          this.message = "Book Has Been Edited Successfully"
           console.log('JWT from Server : ', jwt)
           alert(res.message)
          this.router.navigate(["home"])
        }
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

}
