export type Pizza = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
  };
  
  export enum Status {
    LOADING = "loading",
    SUCCESS = "sucess",
    ERROR = "error",
  }
  
  export interface PizzaSliceState {
    items: Pizza[];
    status: Status;
  }
  
  
  export type SearchPizzaParams = {
    order: string;
    sortBy: string;
    category: string;
    search: string;
    currentPage: string;
  };