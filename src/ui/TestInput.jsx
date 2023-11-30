import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Insert } from "../supabaseService"
import {useForm} from "react-hook-form"
import toast from "react-hot-toast"
import Portal from "./Portal"
import {Link} from "react-router-dom"

function TestInput() {


    const queryClient = useQueryClient()

    const {register,handleSubmit,reset} = useForm()



    const {mutate,
        isLoading} = useMutation({
        mutationFn:Insert,
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:["test"]
            })
            
            queryClient.refetchQueries({
                queryKey:["test"]
            })
            reset()
        },
        onError:(err)=>toast.error(err.message)
    });


function onSumbi(data){
    console.log({...data,image:data.image[0]},"here",data)
    mutate({...data,image:data.image[0]})
}

    return (
        <form onSubmit={handleSubmit(onSumbi)} className="flex flex-col p-3 text-lg space-y-5 " >
            <span>
                <label>GuestName</label>
                <input disabled={isLoading} id="GuestName" {...register("GuestName",{required:"please fill this field"})}  className="ring outline-none rounded ml-3 ring-green-500" type="text"/>
            </span>
            <span>
                <label>Guestid</label>
                <input disabled={isLoading} id="GuestId" {...register("GuestId")} required  className="ring outline-none rounded ml-3 ring-green-500" type="number"/>
            </span>
            <span>
                <label>age</label>
                <input disabled={isLoading} id="age" {...register("age")} required className="ring outline-none rounded ml-3 ring-green-500" type="number"/>
            </span>
            <span>   
                <label>insert image</label>
                <input type="file" id="image" {...register("image")} accept="image/*"   className="ring outline-none rounded ml-3 ring-green-500" />
            </span>
            <button disabled={isLoading}  className="bg-red-300 self-start rounded-lg w-3/12 p-3" >submit</button>
            <Portal/>
            <Link to={"test"}>Go to test page</Link>
        </form>
    )
}

export default TestInput
