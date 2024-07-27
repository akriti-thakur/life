import React from "react";
import {useState} from "react"; 


interface Props{
  items:string[]
  heading:string[]

}

function Lol({items,heading}:Props){
// function Lol(){
const list=[
    'paris',
    'america',
    'india',
    'china',
    'russia'
]






const  [SelectIndex,setSelectedIndex]= useState(-1)
return(
    <>
      
          {
            items.length===0 ?(
              console.log('no items')
            ):
            (
              <>
            <ul className="list-group">
              
             

              { items.map((fog,index)=>( <a  key ={fog} className={SelectIndex ===index?'list-group-item active':'list-group-item'} href="#" onClick={()=>{setSelectedIndex(index);console.log(fog)}}>{fog}</a> ))}

              

            
            </ul>
            </>
            )
        }



        <>
           
{/*         
            {heading.map((know,index)=>(<div key={know}><h2>{know}</h2><ul className="list-group">{ items.map((fog,index)=>( <a  key ={fog} className={SelectIndex ===index?'list-group-item active':'list-group-item'} href="#" onClick={()=>{setSelectedIndex(index)}}>{fog}</a> ))}
            </ul>
            </div>))}
         */}
        
       </>
        
           {/* <ul className="list-group">
              
             { list.map(item => <li className="list-group-item">{item}</li>)}
           </ul>
 
 */}


{/* <div>
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
      { m.map(fog=> <a className="navbar-brand" href="#">{fog}</a> )}
      
    
      </div>
    </nav>
</div> */}

        </>
    )
}



export default Lol

