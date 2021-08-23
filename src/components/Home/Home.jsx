import Pizza from "../Pizza/Pizza";
import SortPopap from "../Сatigories/SortPopap/SortPopap";
import Catigories from "../Сatigories/Catigories"

const Home = ({ items }) => {
  const result = items.map((obj,) => <Pizza {...obj} key={obj}/>)

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
          <SortPopap items={sortItems} onclickItems={(name) => console.log(name)} />
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