export enum SortProp {
    RATING = 'rating',
    PRICE = 'price',
    TITLE = 'title',
}

export type Sort = {
    name: string
    sortProperty: SortProp,
}

export interface FilterSliceState {
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sort: Sort
}

export const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: "популярности",
        sortProperty: SortProp.PRICE,
    },
}
