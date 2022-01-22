/*const expectedValue = 6; 
let userValue = null;

do {
    const userValue = Number(prompt('Calculate 2+2*2'));

} while(userValue !== expectedValue);

alert('You are right');

const startYear = Number(promt('Input start year'))
const endYear = Number(promt('Input end year'))*/

/*const globalVar = 'global';

if (true) {
    
}
 
for(let i = 1; i<=10; i++){
    console.group('')
    for(let i = 1; j<=10; j++){
        console.log(`${j}`)
    }
}*/

const TRY_LIMIT = 3;
const PASSWORD = 'qwerty';
let currentTry = 1;
let isPasswordCorrect = false;

do {
    const userInputPassword = prompt('Input password');
    isPasswordCorrect = userInputPassword === PASSWORD
    if(isPasswordCorrect) {
        
        break;
    }
} while (++currentTry <= TRY_LIMIT)

console.log(``)