import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
import { FormService } from '../form.service';
import { Home } from '../home';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public message!:string;
  public isError:boolean=false;
  public isSuccess:boolean=false;
  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    demolink: ['', Validators.required],
    source: ['', Validators.required],
  })
  constructor(private fb: FormBuilder,private _userService:FormService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.warn(this.profileForm.value);
    this._userService.registerfeed(this.profileForm.value).subscribe(Response=>{
      console.log(Response);
      this.message=Response.message;
      this.isSuccess=true;
      this.isError=false;
      },err=>{
        console.log(err);
        this.message=err.error.message;
        this.isSuccess=false;
        this.isError=true;
    })
  }
}
