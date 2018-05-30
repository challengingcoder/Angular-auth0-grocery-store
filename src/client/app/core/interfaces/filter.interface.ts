
export type String = {
  'value': string;
};

export type Number = {
  'value': number;
};

export interface Filter {
  rating?: String[];
  category?: String[];
  brand?: String[];
  offers?: String[];
  price?: Number[];
}