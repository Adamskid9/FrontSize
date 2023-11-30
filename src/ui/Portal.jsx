import { useState } from "react"

function Portal() {
    const [isOpen,setIsOpen] = useState(false);
  


    return (<>
        <button onClick={()=>setIsOpen(cur=>!cur)} className="font-bold flex transition-all  duration-500 hover:bg-gradient-to-tr hover:from-red-500
         hover:to-yellow-500 hover:bg-[length:100%] relative  bg-[length:30%] 
         
         hover:shadow-black shadow-md shadow-orange-500 cursor-pointer text-white justify-center
          items-center py-3 uppercase bg-blue-600 w-2/12">
           {isOpen?"close":"open"}           
        </button>
         {isOpen&&<Modal/>}
        </>
    )
}

export default Portal



function Modal(){

    return ( <div className="bg-black p-2 text-md font-medium text-white 
     left-[100px] z-50 absolute">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sapiente.
         Officiis id quam necessitatibus pariatur aut praesentium dicta rerum modi.
    </div>
    )
}
