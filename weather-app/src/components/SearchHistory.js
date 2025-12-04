import "./weather.css"

export default function SearchHistory({history, onSelect}){
    if(history.length === 0) return null; 
    return(
        <div className="searchMain">
            <ul className="searchList">
                {history.map((city, index) => (
                    <li key={index} onClick={() => onSelect(city)} className="searchItem">{city}</li>
                ))}
            </ul>
        </div>
    )

}