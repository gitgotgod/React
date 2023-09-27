import PropertyListItem from "./Property"
import "./PropertyList.css"
export default function PropertyList({ properties }) {

    return (
        <div className="PropertyList">
            {properties.map(i => {
                return <PropertyListItem {...i} key={i.id} />
            })}
        </div>
    )
}