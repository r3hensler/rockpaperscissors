import { Player } from './player';

export const ROCK = 'rock';
export const PAPER = 'paper';
export const SCISSORS = 'scissors';

const drawResult = (weapon: string): string => {
    return `Draw. Both players picked ${weapon}.`;
};

const winLoseResult = (winner: Player, loser: Player, method: string): string => {
    let capsWeapon = winner.weapon.charAt(0).toUpperCase() + winner.weapon.slice(1);
    return `${winner.name} wins. ${capsWeapon} ${method} ${loser.weapon}.`;
};

export const rockVersus = (playerA: Player, playerB: Player): string => {
    if (playerB.weapon === ROCK) {
        return (drawResult(ROCK));
    } else if (playerB.weapon === PAPER) {
        return winLoseResult(playerB, playerA, 'covers');
    } else if (playerB.weapon === SCISSORS) {
        return winLoseResult(playerA, playerB, 'smashes');
    }
    return 'there was an error';
};

export const paperVersus = (playerA: Player, playerB: Player): string => {
    if (playerB.weapon === ROCK) {
        return winLoseResult(playerA, playerB, 'covers');
    } else if (playerB.weapon === PAPER) {
        return (drawResult(PAPER));
    } else if (playerB.weapon === SCISSORS) {
        return winLoseResult(playerB, playerA, 'cut');
    }
    return 'there was an error';
};

export const scissorsVersus = (playerA: Player, playerB: Player): string => {
    if (playerB.weapon === ROCK) {
        return winLoseResult(playerB, playerA, 'smashes');
    } else if (playerB.weapon === PAPER) {
        return winLoseResult(playerA, playerB, 'cut');
    } else if (playerB.weapon === SCISSORS) {
        return (drawResult(SCISSORS));
    }
    return 'there was an error';
};
