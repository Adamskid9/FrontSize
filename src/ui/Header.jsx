import { CiBag1 } from "react-icons/ci";
import { CgBolt, CgGlobeAlt } from "react-icons/cg";
import "./Animation.css"
import Main from "./Main";
import supabase from "../Supbase";



const open = {start:0,end:0}

export const accountReducer = function(state=open,action){
 switch(action.type){
    case "start":
        return {...state,start:state.start+action.payload}
    case "end":
        return {...state,end:state.end-action.payload}
    default: 
        return state
 }
}

// Babalola123$

export const Start = function(){
    return {type:"start",payload:20}
}

export async function Allguest(){
    const {data, error } = await supabase
    .from('Guest')
    .select('*')
  

if (error) {
throw new Error("Data Not Found")
}

return data

}

export const End = function(){
    return {type:"end",payload:20}
}   

 const listStyle = `bg-yellow-500 py-1 px-2 rounded-lg cursor-pointer ml
     hover:text-white hover:bg-purple-800 shadow-md flex items-center justify-center `;

export function Header() {  
  
    
     return <>
      <ul className="bg-yellow-200 overflow-hidden flex py-2 px-1  gap-2 text-[16px] 
      font-extrabold
      text-pink-700 items-center justify-center
     transition-all"  >
                <li className={`${listStyle} mr-auto anime`}>review <CgGlobeAlt className="ml-3 text-[23px]" /></li>
                <li className={listStyle}>contact us <CiBag1 className="ml-3 text-[23px]"/> </li>
                <li className={listStyle}>Login <CgBolt className="ml-3 text-[23px] rounded-full text-white bg-red-800"/> </li>
            </ul>
            <Main/>
        </>
}


