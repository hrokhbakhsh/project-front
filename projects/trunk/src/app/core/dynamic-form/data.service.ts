import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  getData(){
    return {
      "controls": [
        {
          "name": "firstName",
          "label": "First Name",
          "value": "",
          "multi": false,
          "class" : "col-xl-6 col-md-6",
          "type": "text",
          "validators": {
            "required": true,
            "minLength": 10
          }
        },
        {
          "name": "lastName",
          "label": " last Name",
          "value": "",
          "type": "list",
          "multi": false,
          "data": [
            {
              "value": "man",
              "label": "man"
            },
            {
              "value": "female",
              "label": "female"
            }
          ],
          "class" : "col-xl-12 col-md-12",
          "validators": {}
        },
        {
          "name": "comments",
          "label": "comments",
          "multi": false,
          "value": "",
          "type": "text",
          "class" : "col-xl-6 col-md-6",
          "validators": {}
        },
        {
          "name": "multi",
          "label": "chand",
          "multi": true,
          "value": "",
          "type": "text",
          "class" : "col-xl-6 col-md-6",
          "validators": {}
        },
        {
          "name": "agreeTerms",
          "multi": false,
          "label": "this is a checkbox",
          "value": "",
          "class" : "col-xl-6 col-md-6",
          "type": "checkbox",
          "validators": {}
        }
      ]
    }
  }
}
