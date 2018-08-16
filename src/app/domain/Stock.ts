import {Variant} from './Variant';
import {Applicability} from './Applicability';

export class Stock {

  constructor() {}
  id: number;
  name: string;
  variants: Array<Variant>;
  applicability: Array<Applicability>;
  f1: boolean;
  f2: boolean;
}
