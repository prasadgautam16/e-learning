import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Constant } from 'src/app/data/constant';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  alertMessage:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(submittedForm : NgForm) {
    if (submittedForm.invalid) return;

    this.alertMessage = Constant.FORM_SAVED_SUCCESSFULLY;
    // alert("Form saved sucessfully.")
  }
}
