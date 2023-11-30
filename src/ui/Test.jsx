import { CgGlobeAlt } from "react-icons/cg"
import {  useDispatch, useSelector } from "react-redux"
import {useQuery} from "@tanstack/react-query"

import { Read } from "../supabaseService";
import TestUi from "./TestUi";
import TestInput from "./TestInput";

const initText = {text:[]};

export const textReducer = function(state=initText,action){
switch(action.type){
    case "text":
        if(action.payload.length<5) return state
        return {...state,text:[...state.text,action.payload]}
    default:
       return state
        
}}


function Test() {

    const {data,status,isLoading,...rest} = useQuery({
        queryKey:["test"],
        queryFn:Read
    });

    const dispatch = useDispatch();

    const store = useSelector(function(store){
     return store.account
    })
    const text = useSelector(function(store){
     return store.text
    })

    console.log(store,"hello",text)
    function handleChange(value){
       if(value.length<5||!value) return;
      dispatch({type:"text",payload:value})
    }
   


    return (
        <div>

        <div className="flex p-2" >
         <input onChange={(e)=>handleChange(e.target.value)}
          placeholder="search reel here..." className="focus:w-4/12 w-2/12 pl-4 font-bold text-xl outline-none rounded-lg
          rouned-md duration-500 transition-all ring-2 ring-red-500"/>
         <CgGlobeAlt className="text-[25px] w-[30px] rounded-lg -ml-12 hover:rotate-180
          transition-all duration-1000 cursor-pointer"/>
        </div>

        <div>
            {isLoading&&<div className="p-3 text-lg uppercase font-bold">loading...</div>}
         {data?.map((value,i)=><TestUi data={value} num={i} isLoading={isLoading} status={status} key={i+1} />)}     
        </div>
        <div>
            <TestInput/>
        </div>

        </div>
    )
}   

export default Test