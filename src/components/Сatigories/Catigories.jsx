import SortPopap from "./SortPopap/SortPopap"

const Catigories = ({ items }) => {
    const result = items.map((obj, index) => <li key={`${obj } ${index}`}>{obj}</li>)
    return (
        <div className="content__top">
            <div className="categories">
                <ul>
                    <li >Все</li>
                    {result}
                </ul>
            </div>
            <SortPopap />
        </div>
    )
}
export default Catigories