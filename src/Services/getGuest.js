import supabase from "../Supbase";

export async function deleteGuest(id){
    const { data, error } = await supabase
    .from('Guest')
    .delete()
    .eq('id', id)

    if(error){
        throw new Error("couldn't delete this")
    }

   return data
  
}