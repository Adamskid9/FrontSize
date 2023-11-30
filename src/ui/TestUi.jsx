import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Delet } from "../supabaseService";
import toast from "react-hot-toast";

function TestUi({data,status,isLoading,num}) {
    const {GuestName,GuestId,age,id,image} = data;
 console.log("hi")
    const queryClient = useQueryClient()

    const {mutate} = useMutation({
        mutationFn:Delet,
        onSuccess:()=>{
            toast.success("Deleted")
            queryClient.invalidateQueries({
                queryKey:["test"]
            })

            queryClient.refetchQueries({
                queryKey:["test"]
            })

        },
        onError:(err)=>toast.error(err.message)
    })
 



    if(isLoading)return <div>loading...</div>

    return (
        <ul className="flex space-x-5 text-lg p-3 uppercase">
            <li>{num+1}</li>
            <li>name: {GuestName}</li>
            <li>id: {GuestId}</li>
            <li>age: {age}</li>
            <li>image: <img className="h-10 w-full rounded-2xl" src={image} alt=""/></li>
            <li onClick={()=>mutate(id)} className="font-bold
             text-purple-200  rounded-full flex items-center
              justify-center cursor-pointer bg-red-800 p-1">Delete</li>

        </ul>
    )
}

export default TestUi

