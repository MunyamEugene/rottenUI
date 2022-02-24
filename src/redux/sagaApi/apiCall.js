export const getData = async(url)=>{
  const   data= await fetch(url);
  return data.json();
}

export const createVote=async(url,vote={})=>{
    const newVte = await fetch(url,{
        method:"POST",
        body:JSON.stringify(vote),
        headers:{
          "Content-type": "application/json; charset=UTF-8"
        }
    })

    return newVte.json();
}