import {UserInterface} from "../interfaces/user.interface";

export class UserModel implements UserInterface {
  constructor(public firstName: string, public lastName: string, public token: string) {}
}
