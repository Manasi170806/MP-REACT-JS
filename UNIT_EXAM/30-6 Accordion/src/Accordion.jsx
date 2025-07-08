import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./styles.css";

function Accordion(props) {
    const [startIndex,setIndex]=useState(null)
    const list = props.items

    return !(list.length > 0) ? <p>No items available</p> : (
        <div>
            {list.map((el,index)=>(
            <div className="accordion">
                <div>
                    <button onClick={()=>setIndex(index == startIndex ? null : index)} className="accordion-title">{el.title}</button>
                </div>
               { index==startIndex && (<div className="accordion-content">
                    <p>{el.content}</p>
                </div>)}
            </div>
    ))}
  </div>
    );
}

export default Accordion;
