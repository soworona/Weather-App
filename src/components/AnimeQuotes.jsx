import { useEffect } from "react"

export default function AnimeQuotes(){
    
    useEffect(()=> {
        fetch('').then(function(response)
         {
            return response.json();
        }).then(function (data){
            console.log(data);
        })
    })
    
    return (
        <div>
            <h1>Anime Quotes</h1>
        </div>
    )
}