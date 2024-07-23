 import { useState } from "react";

 function ColorRender(){
    const [Red, setRed] = useState(0)
    const [Green, setGreen] = useState(0)
    const [Orange, setOrange] = useState(0)
    const [purple, setPurple] = useState(0)
  function handlclick(){
    alert('You clicked my red!' );
    setRed(Red + 1);
  } 
 
  function handlclic(){
    alert('You clicked my green!');
    setGreen(Green+ 1);
  } 
 
  function handlcli(){
    alert('You clicked my orange!');
    setOrange(Orange + 1);
  } 
 
  function handlcl(){
    alert('You clicked my purple!');
    setPurple(purple + 1);
  } 
 

return(
    <div className="CircleHEAD" onClick={handlclick} >{Red}
       
       <div className="CircleFirst" onClick={handlclic}> {Green}
         <div className="CircleSecond" onClick={handlcli} >{Orange}
        <div className="CircleThird" onClick={handlcl}> {purple}
        </div></div>
        </div> 
        
   
    </div>
    
)
}
export default ColorRender;





 