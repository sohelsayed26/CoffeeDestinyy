import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  firstname: any
  lastname: any
  email:any
  number:any
  msg:any
  url='http://localhost:7877/'

  constructor(private http:HttpClient){

  }

  save(data:any)
  {
    this.firstname=data.value.firstname
    this.lastname=data.value.lastname
    this.email=data.value.email
    this.number=data.value.number
    this.http.post(this.url,{"firstname":data.value.firstname, "lastname":data.value.lastname, 
    "email":data.value.email, "number":data.value.number,
  })
    .subscribe((d)=>{this.msg=d})
    alert("Data saved successfully!")
  }
}

