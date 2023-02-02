import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorPayload } from 'src/models/author.payload';
import { MemberPayload } from 'src/models/member.payload';
import { BookDto } from 'src/models/book.dto';
import { UpdateService } from './update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {

  message: string = ""
  memberForm: FormGroup;
  /*bookDto: BookDto = {
    id: 0,
    title: "",
    category: "",
    logoImage: "",
    price: 0,
    author: "",
    author_id: "",
    publisher: "",
    publishedDate: "",
    active: true,
    content:"",
    subscription:false
    
  }*/

  constructor(private _updateService: UpdateService, private router: Router) {

    if(!this.isMember()){
      this.router.navigate(["login"])
    }
  
    this.memberForm = new FormGroup({
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
  updateMember() {
    if (getAuthor()) {
      var memberPayload: MemberPayload = {
        id:this.memberForm.value.memberid,
      name:this.memberForm.value.name,
      address: this.memberForm.value.address,
      state:this.memberForm.value.state,
      country:this.memberForm.value.country,
      email:this.memberForm.value.email,
      pan:this.memberForm.value.pan,
      contactNo:this.memberForm.value.contact,
      dob:this.memberForm.value.dob,
      password:this.memberForm.value.password,
      dependentOne:this.memberForm.value.dpOne,
      dependentOneDob:this.memberForm.value.dpOneDob,
      dependentTwo:this.memberForm.value.dpTwo,
      dependentTwoDob:this.memberForm.value.dpTwoDob
        
      }
      // var authorPayload: AuthorPayload = {
      //   name: getAuthor(),
      //   bookDtoList: [bookDto]
      // }
      this._updateService.editMember(memberPayload).subscribe({
        next: (res: any) => {
          if (!!res.statusCode) {
            alert(res.message)
          } else {
            this.message = "Book Has Been Edited Successfully"
          }
        },
        error: (err: any) => {
          console.log(err)
          //localStorage.clear();
          this.router.navigate(["login"])
        }
      })
    } else {
      this.router.navigate(["login"])
    }
  }

  
  isMember(){
    var member = localStorage.getItem('token')
    if (member) {
      return true
    } else {
      return false
    }
  }


}


function getAuthor(): string {
  var author = localStorage.getItem('token')
  if (author) {
    return author
  } else {
    return ""
  }
}

