import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
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

  onclick(e : any){
    this.val = e.target.value
  }

  onSubmit(){
    console.log(this.myReactiveForm.value)
    this.myReactiveForm.reset();
  }
}


