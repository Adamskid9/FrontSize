import supabase, { supabaseUrl } from "./Supbase";

export async function Read(){
const { data: Guest, error } = await supabase
.from('Guest')
.select('*')

if(error){
    throw new Error("failed to load this data")
}

return Guest

};




export async function Insert(insertData){
const imageName = `${Math.random()}-${insertData.image.name}`
.replaceAll("/","");

const imagePath = `${supabaseUrl}/storage/v1/object/public/image/${imageName}`

const { data, error } = await supabase
  .from('Guest')
  .insert([
    {...insertData,image:imagePath}
  ])
  .select();
console.log(data)

if(error){
    alert(error.message)
    throw new Error("failed to insert this data");
}

console.log(data,"data")

const {error:storageError} = await supabase.storage
.from("image")
.upload(imageName,insertData.image);

if(storageError){
    await supabase.from("Guest").delete().eq("id",data.id);
}

return data

};






export async function Delet(id){
  
const { data,error } = await supabase
.from('Guest')
.delete()
.eq('id', id);

if(error){
    throw new Error("failed to delete this data")
}

return data

};
