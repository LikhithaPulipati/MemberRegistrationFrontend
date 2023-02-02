import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorPayload } from 'src/models/author.payload';
import { BookDto } from 'src/models/book.dto';
import { MemberPayload } from 'src/models/member.payload';


@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  //private author_url = authorurl.url;
  private update_url: string = "http://localhost:8092/updateMember/";
  //private update_url: string = "http://ec2-3-111-186-132.ap-south-1.compute.amazonaws.com:8083/author/updatebook/";
  constructor(private http: HttpClient) { }

  editMember(memberDto:MemberPayload) {
    console.log(memberDto);
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
      // .set('Authorization', 'Bearer ' + authorToken);
    var url = this.update_url + memberDto.email;
    console.log("Created updated URL : ", this.update_url)
    return this.http.put(url, memberDto, {'headers': headers});
  }
}
