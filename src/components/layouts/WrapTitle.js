import React from 'react'; 

function Wraptitle(props){
 return (
     <div className="wrap__title">
         <h2><strong>{props.text[0]}</strong><em>{props.text[1]}</em></h2>

     </div>
 )
}
export default Wraptitle;