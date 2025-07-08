import { useState } from "react"

function Button(){
    const [flag,setflag] = useState(false)
    return(
        <button className="btn" onClick={()=>setflag(!flag)}>{!flag ? "Follow" : "Following"}</button>  
    )
}

export default Button