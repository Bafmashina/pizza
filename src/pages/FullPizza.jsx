import React from "react";
import axios from "axios";
import {useParams, useNavigate} from 'react-router-dom'

const FullPizza = () => {
  const [pizza, setPizza] = React.useState()
  const {id} = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    async function fetchPizza() {
      try{
        const {data} = await axios.get('https://6405853940597b65de392e56.mockapi.io/item/' + id)
        setPizza(data)
      } catch (error) {
        alert('Ошибка при получении данных')
        navigate('/')
      }
    }

    fetchPizza()
  }, [])

  if(!pizza) {
    return "Готовим пиццы для вас"
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
    </div>
  );
};

export { FullPizza };
