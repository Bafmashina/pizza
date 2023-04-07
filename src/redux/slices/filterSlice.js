import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    searchValue: '',
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: "популярности",
        sortProperty: "rating",
    },
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId (staet, action) {
            staet.categoryId = action.payload
        },
        setSearchValue (state, action) {
            state.searchValue = action.payload
        },
        setSort (staet, action) {
            staet.sort = action.payload
        },
        setCurrentPage (staet, action) {
            staet.currentPage = action.payload
        },
        setFilters (state, action) {
            state.sort = action.payload.sort
            state.currentPage = Number(action.payload.currentPage)
            state.categoryId = Number(action.payload.categoryId)
        }
    }
})

export const selectFilter = (state) => state.filter
export const selectSort = (state) => state.filter.sort

export const {setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue} = filterSlice.actions

export default filterSlice.reducer