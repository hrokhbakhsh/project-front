import { Injectable } from '@angular/core';
import {IInbox} from "./IInbox";

@Injectable()
export class InboxService {

  constructor() { }


  getMessageData(){
    return ELEMENT_DATA;
  }
}


const ELEMENT_DATA: IInbox[] = [
  {id: 1, title: 'بیمه ایران', body: 'بیمه ایران خوب است', date: '2021-08-20T19:40:36Z'},
  {id: 2, title: 'بیمه ایران', body: 'بیمه ایران خوب است', date: '2021-08-20T19:40:36Z'},
  {id: 3, title: 'بیمه ایران',body: 'بیمه ایران خوب است', date: '2021-08-20T19:40:36Z'},
  {id: 4, title: 'بیمه ایران',body: 'بیمه ایران خوب است', date: '2021-08-20T19:40:36Z'},
  {id: 5, title: 'بیمه ایران', body: 'بیمه ایران خوب است', date: '2021-08-20T19:40:36Z'},
  {id: 6, title: 'بیمه ایران', body: 'بیمه ایران خوب است', date: '2021-08-20T19:40:36Z'},
  {id: 7, title: 'بیمه ایران', body: 'بیمه ایران خوب است', date: '2021-08-20T19:40:36Z'},
  {id: 8, title: 'بیمه ایران', body: 'بیمه ایران خوب است', date: '2021-08-20T19:40:36Z'},
  {id: 9, title: 'بیمه ایران', body: 'بیمه ایران خوب است',date: '2021-08-20T19:40:36Z'},
  {id: 10, title: 'بیمه ایران', body: 'بیمه ایران خوب است', date: '2021-08-20T19:40:36Z'},
];
