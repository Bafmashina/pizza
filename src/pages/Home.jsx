import React from "react";
import {useSelector, useDispatch} from 'react-redux' // redux хуки

import {setCategoryId} from '../redux/slices/filterSlice' // redux store функция

import  Categories  from "../components/Categories";
import  Sort  from "../components/Sort";
import  PizzaBlock  from "../components/PizzaBlock/index";
import  Skeleton  from "../components/PizzaBlock/Skeleton";
import Pagination  from "../components/Pagination";
import { SearchContext } from "../App";

export const Home = () => {
  const dispatch = useDispatch()
  const {categoryId, sort} = useSelector((state) => state.filter)
  const sortType = sort.sortProperty
  

  const {searchValue} = React.useContext(SearchContext) // контекст

  const [items, setItems] = React.useState([]); // массив пицц
  const [isLoading, setIsLoading] = React.useState(true); // загрузка
  const [currentPage, setCurrentPage] = React.useState(1)

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  React.useEffect(() => {
    setIsLoading(true);

    // переменные для запросаов с бэка
    const order = sortType.includes("-") ? "asc" : "desc";
    const sortBy = sortType.replace("-", "");
    const category = categoryId > 0 ? `&category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : ''

    fetch(
      `https://6405853940597b65de392e56.mockapi.io/item?page=${currentPage}&limit=8${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  // переменные для рендера пицц
  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={onChangeCategory}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
    <Pagination onChangePage={(num) => setCurrentPage(num)}/>
    </div>
  );
};

export default Home ;
