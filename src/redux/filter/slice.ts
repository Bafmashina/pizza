import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { FilterSliceState, Sort, SortProp } from "./types"

export const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: "популярности",
        sortProperty: SortProp.PRICE,
    },
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId (staet, action: PayloadAction<number>) {
            staet.categoryId = action.payload
        },
        setSearchValue (state, action: PayloadAction<string>) {
            state.searchValue = action.payload
        },
        setSort (staet, action: PayloadAction<Sort>) {
            staet.sort = action.payload
        },
        setCurrentPage (staet, action: PayloadAction<number>) {
            staet.currentPage = action.payload
        },
        setFilters (state, action: PayloadAction<FilterSliceState>) {
            state.sort = action.payload.sort
            state.currentPage = Number(action.payload.currentPage)
            state.categoryId = Number(action.payload.categoryId)
        }
    }
})


export const {setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue} = filterSlice.actions

export default filterSlice.reducer