import { getVillain, getSuperHero, getDado100C, getDado20C, getDado3C } from "./functions.mjs";
import { gameStart } from "./gameController.mjs";
import { getData } from "./gameService.mjs";

async function initializeGame() {
    try {
        const data = await getData();
        const villainZarate = getVillain(data);
        const superHero = getSuperHero(data);
        const D100C = getDado100C();
        const D20C = getDado20C();
        const D3C = getDado3C();

        gameStart(villainZarate, superHero, D100C, D20C, D3C);
        // console.log(D100C);
        // console.log(D20C);
        // console.log(D3C);
    } catch (error) {
        // Manejar errores, por ejemplo, imprimir en la consola
        console.error('Error al inicializar el juego:', error);
    }
}

initializeGame();