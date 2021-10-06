import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
export interface ITable {
  groupName: string;
  position: string;
  name: string;
  edit:string;
}
