import { String, Number } from './filter.interface'

export interface Product {
  id?: number;
  name?: string;
  picture?: string;
  rating?: String[];
  category?: String[];
  brand?: String[];
  offers?: String[];
  price?: Number[];
}