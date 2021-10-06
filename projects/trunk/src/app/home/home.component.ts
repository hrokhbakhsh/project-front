import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'pmt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opening:any;
  labtopInside='labtop-inside';
  laptopLogo='display-none';
  progresBar='display-none'
  laptopScreen='display-none'
  constructor(private _router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
        this.opening='open-laptop';

      },1000
    )
    setTimeout(() => {

        this.labtopInside='labtop-inside-bg';
        this.laptopLogo='display-show'

      },2000
    )
    setTimeout(() => {

        this.labtopInside='labtop-inside-bg';
        this.laptopLogo='display-none'

      },2500
    )
    setTimeout(() => {

        this.progresBar='display-show'

      },3000
    )
    setTimeout(() => {
        this.progresBar='display-none'
        this.laptopScreen='display-show'

      },5500
    )
    // this._router.navigate(['/panel'])
  }

}
