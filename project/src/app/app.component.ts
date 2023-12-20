import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  result:any
  number=20
  age=17

student=

{
  "name":"john",
  "id":101,
  "city":"Aurangbad",
  // "age":20

}

checkEvenOdd()
{
  if(this.number % 2===0){
    this.result='number is Even';
  }
  else{
    this.result='odd';

  }
  
}

// constructor(){
//   this.checkEvenOdd()
//   console.log(this.result)

// }
  





  }






