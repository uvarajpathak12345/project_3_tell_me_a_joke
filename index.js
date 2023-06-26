let text = document.getElementById(`h5`);

async function myfunction(){
   let get = await fetch(`https://icanhazdadjoke.com/`,{
       headers:{
           accept:`application/json`
       }
   })
   let jokes =await get.json()
   let realjokes = jokes.joke
   text.innerHTML = realjokes  
}