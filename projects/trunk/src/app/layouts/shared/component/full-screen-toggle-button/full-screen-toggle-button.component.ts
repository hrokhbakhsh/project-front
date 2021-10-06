import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'pmt-full-screen-toggle-button',
  templateUrl: './full-screen-toggle-button.component.html',
  styleUrls: ['./full-screen-toggle-button.component.scss']
})
export class FullScreenToggleButtonComponent implements OnInit {
  isFullScreen = false;
  private _elem: any;

  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    this._elem = document.documentElement;
  }

  fullScreen() {
    if (this._elem.requestFullscreen) {
      this._elem.requestFullscreen();
    } else if (this._elem.mozRequestFullScreen) {
      /* Firefox */
      this._elem.mozRequestFullScreen();
    } else if (this._elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this._elem.webkitRequestFullscreen();
    } else if (this._elem.msRequestFullscreen) {
      /* IE/Edge */
      this._elem.msRequestFullscreen();
    }

    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }
}
