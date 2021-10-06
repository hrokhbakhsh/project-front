import {ButtonEnum} from "./button.enum";

export interface IButton {
  label?: string;
  hasLabel?: boolean;
  icon?: string;
  hasIcon?: boolean;
  class?: string;
  type?: ButtonEnum;
}
