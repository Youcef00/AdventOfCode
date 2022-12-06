let m = `A Y
B X
C Z`;


// 1 ROCK
// 2 PAPER
// 3 Scissors
// 3 Draw
// 6 Win
const PFC = {
    'A' : 'R', 'X' : 'R',
    'B' : 'P', 'Y': 'P',
    'C' : 'S', 'Z': 'S'
};
const getWinner = (a, b) => {
    if(PFC[a] === 'R' && PFC[b] === 'R') // A Rock B Paper
        return 4; // 6 = Win
    else if (PFC[a] === 'R' && PFC[b] === 'P') // A Rock B Paper
        return 8;
    else if (PFC[a] === 'R' && PFC[b] === 'S')
        return 3;
    else if (PFC[a] === 'P' && PFC[b] === 'R')
        return 1;
    else if (PFC[a] === 'P' && PFC[b] === 'P')
        return 5;
    else if (PFC[a] === 'P' && PFC[b] === 'S')
        return 9;
    else if (PFC[a] === 'S' && PFC[b] === 'R')
        return 7;
    else if (PFC[a] === 'S' && PFC[b] === 'P')
        return 2;
    else if (PFC[a] === 'S' && PFC[b] === 'S')
        return 6;
}

console.log(m.split('\n').reduce((acc, curr) => acc += getWinner(curr.split(' ')[0], curr.split(' ')[1]), 0));
