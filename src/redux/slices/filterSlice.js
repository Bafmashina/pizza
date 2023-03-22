import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
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
        setSort (staet, action) {
            staet.sort = action.payload
        }
    }
})

export const {setCategoryId, setSort} = filterSlice.actions

export default filterSlice.reducer