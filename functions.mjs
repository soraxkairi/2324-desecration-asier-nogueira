

function getVillain(data){
let villain = -1;
    data.forEach( (element) => {
        if (element.name === "Junkpile")
        {
            villain = element;
            villain.powerstats.hitpoints = villain.powerstats.strength * 10;
        }
    })
    return villain;
}

function getSuperHero(data){
    let superHero = -1;

    superHero = data[Math.floor(Math.random() * data.length)];
    superHero.powerstats.hitpoints = superHero.powerstats.strength * 10;
    if (superHero.powerstats.hitpoints > 666)
    {
        superHero.powerstats.hitpoints = 666;
    }
    return superHero;
    
}

function getDado100C(){
    let D100C = [];
    for (let i = 0; i <= 100; i++) {
        D100C.push(i);
    }
    return D100C
}

function getDado20C(){
    let D20C = [];
    for (let i = 0; i <= 20; i++) {
        D20C.push(i);
    }
    return D20C
}

function getDado3C(){
    let D3C = [];
    for (let i = 0; i <= 3; i++) {
        D3C.push(i);
    }
    return D3C
}

export {
    getVillain,
    getSuperHero,
    getDado100C,
    getDado20C,
    getDado3C
}