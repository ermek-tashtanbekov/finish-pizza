import { useState } from "react"

const Catigories = ({ items, }) => {

    const [active, SetActve] = useState(false)

    function onselectAtem(index) {
        SetActve(index)
    }

    console.log(onselectAtem)
    return (
        <div className="categories">
            <ul>
                <li className={active === false ? "active" : ''} onClick={() => onselectAtem(false)} >Все</li>
                {items.map((obj, index) =>
                    <li key={`${obj} ${index}`}
                        onClick={() => onselectAtem(index)}
                        className={active === index ? 'active' : null}
                    >{obj}</li>)}
                </ul>
        </div>


    )
}
export default Catigories