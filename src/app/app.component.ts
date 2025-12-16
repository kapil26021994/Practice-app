import { Component } from '@angular/core';
import { Form, FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practice-app';
  isSubmitted:boolean =false;
  public userForm :any = FormGroup;
  constructor(private fb:FormBuilder){

  }

  ngOnInit(){
    this.userForm = this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      mnumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      gender:['',Validators.required]           
    })
  }
  
  get userFormControl(){
    return this.userForm.controls;
  }

  doSignup(){
    this.isSubmitted = true;
    this.userForm.patchValue({
      name:'Kapil',
      email:'Kapil@gmail.com'
    })
  }
}
