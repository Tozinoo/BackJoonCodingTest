function solution(character, monsters) {
    let [playerHP, playerAttack, playerArmor] = character.split(" ");
    const playerAbsoluteHP = playerHP;
    let timer = 0;
    let exp = [];

    for (let i = 0; i < monsters.length; i++) {
        let [monsterName, monsterExp, monsterHP, monsterAttack, monsterArmor] =
            monsters[i].split(" ");
        while (true) {
            monsterHP -= playerAttack - monsterArmor;
            timer++;

            if (monsterHP <= 0) {
                exp.push([monsterName, parseFloat(monsterExp / timer)]);
                timer = 0;
                break;
            }
            playerHP -= monsterAttack - playerArmor;

            monsterHP;
            if (playerHP <= 0) {
                exp.push([monsterName, 0]);
                timer = 0;
                break;
            }

            playerHP = playerAbsoluteHP;
        }
    }
    console.log(exp.sort((a, b) => b[1] - a[1])[0][0]);
    return exp.sort((a, b) => b[1] - a[1])[0][0];
}

const attackMonster = () => {};

console.log(
    solution("10 5 2", [
        "Knight 3 10 10 3",
        "Wizard 5 10 15 1",
        "Beginner 1 1 15 1",
    ])
);
