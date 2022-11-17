import React from "react"
import Secretary from "../secretary-page/secretary"

const Directory = ({categories}) => {
    return (
        <div >
            {categories.map((category) => (
                <Secretary key={category.id} category={category} /> 
            ))}
        </div>
    )
}
export default Directory