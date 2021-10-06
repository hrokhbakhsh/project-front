import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'pmt-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  editList = true;
  nameText: String = 'پارلا';
  emailText: String = 'parla7498@gmail.com';
  phoneText: String = '021-22222';
  mobileText: String = '0903-22222';
  adressText: String = 'تهران....';

  nameEdit: String = '';
  emailEdit: String = '';
  phoneEdit: String = '';
  mobileEdit: String = '';
  adressEdit: String = '';


  List = new Array < {
    name: String,
    email: String,
    phone: String,
    mobile: String,
    adress: String

  } > ();


  changeEdit(index: any) {

    this.List[index].name = this.nameEdit
    this.List[index].email = this.emailEdit
    this.List[index].phone = this.phoneEdit
    this.List[index].mobile = this.mobileEdit
     this.List[index].adress = this.adressEdit
  

  }


  constructor() {}

  ngOnInit(): void {}

}
