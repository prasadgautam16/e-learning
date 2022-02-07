import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

    this.alertMessage = "Form saved sucessfully.";
    // alert("Form saved sucessfully.")
  }
}
