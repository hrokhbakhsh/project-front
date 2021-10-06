import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmt-dropdown-message-list',
  templateUrl: './dropdown-message-list.component.html',
  styleUrls: ['./dropdown-message-list.component.scss']
})
export class DropdownMessageListComponent implements OnInit {

  messages = [
    {
      id: 1,
      title: 'پیام اول',
      messageBody: 'در این بخش خلاصه یا تمام پیام نمایش داده میشود',
      updated: '1400/05/19',
    },
    {
      id: 2,
      title: 'پیام دوم',
      messageBody: 'در این بخش خلاصه یا تمام پیام نمایش داده میشود',
      updated: '1400/05/15',
    },
    {
      id: 3,
      title: 'پیام سوم',
      messageBody: 'در این بخش خلاصه یا تمام پیام نمایش داده میشود',
      updated: '1400/05/07',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
