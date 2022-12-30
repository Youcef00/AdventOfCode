const day10_1 = (input) => {
    const cycles = [20];
    Array.from(new Array(input.length)).forEach(() => cycles.push(cycles[cycles.length - 1] + 40));

    let cycle = 0;
    let x = 1;
    let signalStrength = 0;
    for (const op of input) {
        if (op[0] === 'addx') {
            for (let tmpCycle = 1; tmpCycle <= 2; tmpCycle++) {
                cycle++;
                if (tmpCycle === 2) {
                    if (cycles.includes(cycle)) {
                        signalStrength += cycle * x;
                    }
                    x += parseInt(op[1]);
                }
            }
        } else if (op[0] === 'noop') {
            if (cycles.includes(cycle)) {
                signalStrength += cycle * x;
            }
            cycle++;
        }
    }
    console.log(signalStrength);
}

const m_test =
    `addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`.split('\n').map(l => l.split(' '));


day10_1(m_test);