
function getVillain(data){
    const villain = data.find(element => element.name === "Junkpile");
    return villain
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
    for (let i = 1; i <= 100; i++) {
        D100C.push(i);
    }
    return D100C
}

function getDado20C(){
    let D20C = [];
    for (let i = 1; i <= 20; i++) {
        D20C.push(i);
    }
    return D20C
}

function getDado3C(){
    let D3C = [];
    for (let i = 1; i <= 3; i++) {
        D3C.push(i);
    }
    return D3C
}


function getDado5C(){
    let D5C = [];
    for (let i = 1; i <= 5; i++) {
        D5C.push(i);
    }
    return D5C
}
export {
    getVillain,
    getSuperHero,
    getDado100C,
    getDado20C,
    getDado3C,
    getDado5C
}