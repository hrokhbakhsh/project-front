import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../../core/dynamic-form/data.service";
import {DynamicFormComponent, JsonFormData} from "../../../core/dynamic-form/dynamic-form.component";
import {PlaceholderDirective} from "../../../core/shared-lib/placeholder.directive";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'pmt-show-people',
  templateUrl: './show-people.component.html',
  styleUrls: ['./show-people.component.scss']
})
export class ShowPeopleComponent implements OnInit {

  jsonData : JsonFormData | any ;



  @ViewChild(PlaceholderDirective, {static: true}) adHost!: PlaceholderDirective;

  constructor(private _getData: DataService,
              private componentFactoryResolver: ComponentFactoryResolver
              ) { }

  ngOnInit(): void {
    this.jsonData = this._getData.getData();
    /*   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicFormComponent) ;
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const formComponent = viewContainerRef.createComponent(componentFactory)
    if (formComponent.instance.jsonFormData){
      formComponent.instance.jsonFormData = this._getData.getData();
    }*/
  }


}
