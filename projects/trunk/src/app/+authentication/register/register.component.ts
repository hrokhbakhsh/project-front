import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'pmt-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm = this._fb.group({
    userName: [null, Validators.required],
    password: [null, Validators.required]
  });

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
