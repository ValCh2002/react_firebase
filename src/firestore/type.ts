export type Food={
  id:string
  name:string
  price:number
  description:string
  category:string
  bool:Boolean
}

export type Set={
  id:string
  name:string
  foods:Food[]
}

export const category:string[]=['Fruit','Vegetables','Snack','Dessert','Fast-Food']


export enum MyCollection {
  FOOD = 'food',
  SET = 'set',
}

export enum MyWhere {
  LESS_THAN = '<',
  LESS_THAN_OR_EQUAL_TO = '<=',
  EQUAL_TO = '==',
  GREATER_THAN = '>',
  GREATER_THAN_OR_EQUAL_TO = '>=',
  NOT_EQUAL_TO = '!=',
  ARRAY_CONTAINS = 'array-contains',
  ARRAY_CONTAINS_ANY = 'array-contains-any',
  IN = 'in',
  NOT_IN = 'not-in',
}
