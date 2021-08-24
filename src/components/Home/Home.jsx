import Pizza from "../Pizza/Pizza";
import SortPopap from "../Сatigories/SortPopap/SortPopap";
import Catigories from "../Сatigories/Catigories"
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "../../store/action/pizzas";
import { useEffect } from "react";


const Home = () => {
  const itemsResult = useSelector(state => state.pizzas.items)
  console.log(itemsResult)

  const result = itemsResult.map((ogb, index) => (<Pizza key={`${ogb} ${index}`} {...ogb}/>));


  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchPizzas())
  }, [])

  const sortItems = [
    { name: 'популяр ности', type: 'popular' },
    { name: 'Цена', type: 'prise' },
    { name: 'По алфавиту', type: 'alphabet' }
  ];
   const catigories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Catigories items={catigories} />
          <SortPopap items={sortItems} onclickItems={[]} />
        </div>

        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
{result}
        </div>
      </div>
    </div>
  )

}
export default Home