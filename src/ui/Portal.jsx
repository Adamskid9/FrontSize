import { useState } from "react"
import toast from "react-hot-toast";

function Portal() {
    const [isOpen,setIsOpen] = useState(false);
     const  conditional = isOpen?`duration-500 hover:bg-gradient-to-tr hover:from-red-500
     hover:to-yellow-500 hover:bg-[length:100%] relative  bg-[length:30%] 
     hover:shadow-black shadow-md shadow-orange-500`:""


    return (<>
        <button onClick={()=>setIsOpen(cur=>!cur)} className={`font-bold flex transition-all cursor-pointer
         text-white justify-center ${conditional}
          items-center py-3 uppercase bg-blue-600 w-2/12 `}>
           {isOpen?"close":"open"}           
         {isOpen&&<Modal/>}
        </button>
        </>
    )
}

export default Portal



function Modal(){

   
    return ( <div onClick={()=>toast.success("hello world")} className="bg-black p-2 text-md font-medium text-white 
     left-0 z-50">
        <span></span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sapiente.
         Officiis id quam necessitatibus pariatur aut praesentium dicta rerum modi.
    </div>
    )
}
