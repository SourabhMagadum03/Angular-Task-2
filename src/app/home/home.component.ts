import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  myReactiveForm : FormGroup | any;
  studentArr : string[]= ['Phone', 'Email']
  val:any;
  ngOnInit(): void {
    this.myReactiveForm = new FormGroup ({

      firstName : new FormControl ('', Validators.required),
      lastName : new FormControl ('', Validators.required),
      ContactNumber : new FormControl ('', Validators.required),
      EmailId : new FormControl ('', Validators.required),
      
    })
  }
 
  OnChane(e : any){
    this.val = e.target.value;
  }
  onSubmit(){
    console.log(this.myReactiveForm.value)
    this.myReactiveForm.reset();
  }
}
