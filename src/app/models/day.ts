import {Item} from "./item";

export interface Day {
  name: string;
  items: { [key: number]: Item };
}
