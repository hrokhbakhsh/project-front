import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Event, NavigationEnd, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public sidenavIsOpenedSubject = new BehaviorSubject(true);
  public windowResize = new BehaviorSubject(true);
  public currentUrl = new BehaviorSubject<any>(null);


  public appDrawer: any;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  public closeNav() {
    this.appDrawer.close();


  }

  public openNav() {
    this.appDrawer.open();
  }


  public getMenus(){
    return [
      {
        displayName: 'داشبورد',
        iconName: 'recent_actors',
        route: '/panel'
      },
      {
        displayName: 'مدیریت مشتریان',
        iconName: 'group',
        route: '',
        children: [
          {
            displayName: 'اشخاص حقیقی',
            iconName: 'group',
            route: '',
            children: [
              {
                displayName: 'تعریف شخص حقیقی',
                iconName: 'horizontal_rule',
                route: '/panel/customer-management/definition-real-person'
              },
              {
                displayName: 'استعلام اشخاص حقیقی',
                iconName: 'horizontal_rule',
                route: '/panel/customer-management/inquiry-real-person'
              }
            ]
          },
          {
            displayName: 'اشخاص حقوقی',
            iconName: 'group',
            route: '',
            children: [
              {
                displayName: 'استعلام شخص حقوقی',
                iconName: 'horizontal_rule',
                route: '/panel/customer-management/inquiry-legal-person'
              },
              {
                displayName: 'تعریف شخص حقوقی',
                iconName: 'horizontal_rule',
                route: '/panel/customer-management/definition-legal-person'
              }
            ]
          },
        ]
      },
      {
        displayName: 'گروه بندی اشخاص',
        iconName: 'reduce_capacity',
        route: '',
        children: [
          {
            displayName: 'گروه بندی اشخاص',
            iconName: 'horizontal_rule',
            route: '/panel/grouping-person/groupingPerson',
          },
          {
            displayName: 'تخصیص شخص به گروه',
            iconName: 'horizontal_rule',
            route: '/panel/grouping-person/show-people',
          },

          {
            displayName: '  نمایش اشخاص',
            iconName: 'horizontal_rule',
            route: '',
          },
        ]
      },
      {
        displayName: 'مدیریت واحد های همکار',
        iconName: 'manage_accounts',
        route: '',
        children: [
          {
            displayName: 'تعریف واحد همکار',
            iconName: 'group',
            route: '',
            children: [
              {
                displayName: 'نمایش واحد همکار',
                iconName: 'horizontal_rule',
                route: ''
              },
              {
                displayName: 'افزودن واحد همکار',
                iconName: 'horizontal_rule',
                route: '/panel/add-unit-teammate/addunit'
              },
              {
                displayName: 'لیست واحد همکار',
                iconName: 'horizontal_rule',
                route: '/panel/add-unit-teammate/teamunit'
              }
            ]
          },
        ]
      },
      {
        displayName: 'فروش بیمه نامه',
        iconName: 'sell',
        route: 'disney'

      },
      {
        displayName: 'پرداخت خسارت',
        iconName: 'credit_card',
        route: 'disney'

      },
      {
        displayName: 'حسابداری ',
        iconName: 'point_of_sale',
        route: 'disney'

      },
      {
        displayName: '  دریافت و پرداخت',
        iconName: 'credit_card',
        route: 'disney'

      }




    ];
  }
}
