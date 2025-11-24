

export default function SearchHistory({history, onSelect}){
    if(history.length === 0) return null; 
    return(
        <div>
            <h3>Search History: </h3>
            <ul>
                {history.map((city, index) => (
                    <li key={index} onClick={() => onSelect(city)}>{city}</li>
                ))}
            </ul>
        </div>
    )

}