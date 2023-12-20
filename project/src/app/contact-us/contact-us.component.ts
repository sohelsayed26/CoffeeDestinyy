import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  namef:any
  emailf:any
  subjectf:any
  messagef:any
  message:any
  url='http://localhost:7877'

  constructor(private http:HttpClient){

  }
 save(data:any)
 {
  this.namef=data.value.namef
  this.emailf=data.value.emailf
  this.subjectf=data.value.emailf
  this.messagef=data.value.emailf
  this.http.post(this.url,{"namef":data.value.namef, "emailf":data.value.emailf, "subjectf":data.value.subjectf,
  "messagef":data.value.messagef
})
    .subscribe((d)=>{this.message=d})
    alert("Data saved successfully!")

 }


}
