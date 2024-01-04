import { memo } from "react"

 const Again2 = (props)=>{
    console.log(props.dataMemo)
    return(<>
      <h2>Again2</h2>
    </>)
 }

 export default memo(Again2)