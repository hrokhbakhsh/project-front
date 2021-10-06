import {Component, Input, OnInit} from '@angular/core';
import {Avatar, BoxOption} from './pmt-fast-report-box.interfaces';


const defaultAvatarConfig: Avatar = {
  class: "text-light bg-success",
  icon: "user",
  iconSize: "4rem"
}

const defaultConfig: BoxOption = {
  class: "",
  bodyClass: "bg-light text-dark",
  subtitle: "",
  title: "",
  titleClass: "text-capitalize",
  subtitleClass: "",
  textClass: "",
  actionClass: "bg-light text-dark"
};

@Component({
  selector: 'pmt-fast-report-box',
  templateUrl: './pmt-fast-report-box.component.html',
  styleUrls: ['./pmt-fast-report-box.component.scss']
})

export class PmtFastReportBoxComponent implements OnInit {


  @Input() option: BoxOption | undefined;
  titleClass = "";
  avatarClass = "";
  avatarIcon : string | undefined;
  avatarIconSize: string | undefined;


  constructor() {
  }

  ngOnInit(): void {
    this.titleClass = [this.option?.titleClass ? this.option?.titleClass : defaultConfig.titleClass].toString();


    this.avatarClass  =[this.option?.avatar?.class ? this.option?.avatar?.class : defaultAvatarConfig.class].toString();


    this.avatarIcon = this.option?.avatar?.icon ? this.option?.avatar?.icon : defaultAvatarConfig?.icon;


    this.avatarIconSize = this.option?.avatar?.iconSize ? this.option?.avatar?.iconSize : defaultAvatarConfig?.iconSize;

  }




  bodyClass() {
    return [this.option?.bodyClass ? this.option?.bodyClass : defaultConfig.bodyClass];
  }


  subtitleClass() {
    return [this.option?.subtitleClass ? this.option?.subtitleClass : defaultConfig.subtitleClass];
  }

  textClass() {
    return [this.option?.textClass ? this.option?.textClass : defaultConfig.textClass];
  }


  mainClass() {
    return [this.option?.class ? this.option?.class : defaultConfig.class];
  }

  actionClass() {
    return [this.option?.actionClass ? this.option?.actionClass : defaultConfig.actionClass];
  }





  hasActions() {
    return this.option?.actions?.length && this.option?.actions?.length > 0;
  }
}
