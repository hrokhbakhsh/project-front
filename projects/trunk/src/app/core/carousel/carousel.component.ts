import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmt-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  items = {
    carousel: [
      {
        active:true,
        colNumber:3,
        carouselItem: [
          {
            title: "item1",
            Url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
            body: "boy1"
          },
          {
            title: "item2",
            Url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
            body: "body2"
          },
          {
            title: "item3",
            Url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
            body: "body3"
          },
        ]
      } ,
      {
        active:false,
        colNumber:3,

        carouselItem: [
          {
            title: "item4",
            Url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
            body: "boy4"
          },
          {
            title: "item5",
            Url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
            body: "body5"
          },
          {
            title: "item6",
            Url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
            body: "body6"
          },
        ]
      }
    ]
  }

  ngOnInit(): void {
  }

}
