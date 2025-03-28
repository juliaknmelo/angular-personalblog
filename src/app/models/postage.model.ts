import { Theme } from "./theme.model";

export interface Postage{
  id: number,
  title: string,
  text: string,
  date?: Date,
  theme: Theme,
}


