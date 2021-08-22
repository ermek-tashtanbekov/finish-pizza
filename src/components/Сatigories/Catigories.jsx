import { useState } from "react"
import SortPopap from "./SortPopap/SortPopap"

const Catigories = ({ items }) => {
    const [visibiliti, SetVisibiliti] = useState(0)
    const [active, SetActve] = useState(0)
    
    function onselectAtem(index) {
        SetActve(index)
       SetVisibiliti(null)
    }

    console.log(onselectAtem)
    return (
        <div className="content__top">
            <div className="categories">
                <ul>
                    <li  >Все</li>
                    {items.map((obj, index) => <li
                        key={`${obj} ${index}`}
                        onClick={() => onselectAtem(index)}
                        className={active === index ? 'active' : null}
                    >{obj}</li>)}
                </ul>
            </div>
            <SortPopap />
        </div>
    )
}
export default Catigories