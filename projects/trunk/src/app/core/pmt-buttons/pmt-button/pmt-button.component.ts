import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IButton} from "../IButton";
import {Subscription} from "rxjs";
import {TranslateService} from "@ngx-translate/core";
import {Direction, Directionality} from "@angular/cdk/bidi";
import {ButtonEnum} from "../button.enum";

@Component({
  selector: 'pmt-button',
  templateUrl: './pmt-button.component.html',
  styleUrls: ['./pmt-button.component.scss']
})
export class PmtButtonComponent implements OnInit, OnDestroy {

  defaultButton: IButton = {
    type: ButtonEnum.ADD,
    class: "bg-success text-white",
    label: this._translate.instant('button.add'),
    icon: 'add',
    hasIcon: false,
    hasLabel: true
  }

  @Input() type: ButtonEnum | any;
  @Input() button: IButton | any;
  direction$: Subscription | undefined;

  hasLabel: boolean = true
  hasIcon: boolean = false ;
  getIcon: string = "";

  getClass: string = '';

  constructor(private _translate: TranslateService,
              private _direction: Directionality) {
  }

  ngOnInit(): void {
    this._initialDefaultButton();

    this.direction$ = this._direction.change.subscribe((value: Direction) => {
      this._initialDefaultButton();
    })

    this.hasLabel = this.button?.hasLabel ? this.button?.hasLabel : this.defaultButton.hasLabel;

    this.hasIcon = this.button?.hasIcon ? this.button?.hasIcon : this.defaultButton.hasIcon;

    this.getIcon = [this.button?.icon ? this.button?.icon : this.defaultButton.icon].toString();


    this.getClass = [this.button?.class ? this.button?.class : this.defaultButton.class].toString();


  }

  private _initialDefaultButton() {
    switch (this.type) {
      case ButtonEnum.ADD: {
        this.defaultButton.class = 'bg-success text-white';
        this.defaultButton.label = this._translate.instant('button.add');
        this.defaultButton.icon = this._translate.instant('add');
      }
        break;
      case ButtonEnum.EDIT: {
        this.defaultButton.class = 'bg-warning text-white';
        this.defaultButton.label = this._translate.instant('button.edit');
        this.defaultButton.icon = this._translate.instant('edit');
      }
        break;
      case ButtonEnum.DELETE: {
        this.defaultButton.class = 'bg-danger text-white';
        this.defaultButton.label = this._translate.instant('button.delete');
        this.defaultButton.icon = this._translate.instant('delete');
      }
        break;
      case ButtonEnum.VIEW: {
        this.defaultButton.class = 'bg-primary text-white';
        this.defaultButton.label = this._translate.instant('button.view');
        this.defaultButton.icon = this._translate.instant('eyes');
      }
        break;
      case ButtonEnum.SEARCH: {
        this.defaultButton.class = 'bg-primary text-white';
        this.defaultButton.label = this._translate.instant('button.search');
        this.defaultButton.icon = this._translate.instant('eyes');
      }
        break;

    }
  }
  getButtonEnum() {
    return ButtonEnum;
  }



  getType() {
    debugger
    return [this.button?.type ? this.button?.type : this.defaultButton.type];
  }

  getLabel() {
    return [this.button?.label ? this.button?.label : this.defaultButton.label];
  }




  ngOnDestroy() {
    this.direction$?.unsubscribe()
  }

}
