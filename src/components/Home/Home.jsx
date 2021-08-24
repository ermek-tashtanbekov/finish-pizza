import Pizza from "../Pizza/Pizza";
import SortPopap from "../Сatigories/SortPopap/SortPopap";
import Catigories from "../Сatigories/Catigories"
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "../../store/action/pizzas";
import { useEffect } from "react";
import LoadingBlock from "../LoadingBlok/LoadingBlok";


const Home = () => {
  const itemsResult = useSelector(state => state.pizzas.items)
  const isLoaded = useSelector(state => state.pizzas.isLoaded)
  console.log(itemsResult)

  // const result = itemsResult.map((ogb, index) => (<Pizza key={`${ogb} ${index}`} {...ogb}/>));


  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchPizzas())
  }, [dispatch])

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
{isLoaded ? itemsResult.map((ogb, index) => (<Pizza key={`${ogb} ${index}`}  {...ogb}/>))
 : Array(12)
 .fill(0)
 .map((_, index) => <LoadingBlock key={index} />)}
        </div>
      </div>
    </div>
  )

}
export default Home