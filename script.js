
document.querySelector(".google-search-button").addEventListener("click",getPokemon);  

function lowerCaseName(string){
    return string.toLowerCase();
}

function getPokemon(e){
    const name=document.querySelector("#pokemonName").value;
    const pokemonName=lowerCaseName(name);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response)=>response.json())
    .then((data)=>{
        document.querySelector(".pokemonBox").innerHTML=`
            <div>
                <img
                src="${data.sprites.other["official-artwork"].front_default}" 
                alt="${data.name}"
                >
            </div>
            <div class="pokemonInfo">
                <h1>${data.name}</h1>
                <p>Weight:${data.weight}</p>
            </div>
        `
    }).catch((err)=>{
        console.log('Pokemon not found',err)
    });

    e.preventDefault();
}


