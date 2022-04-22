let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if(typeof userInput === 'string'){
	userName = userInput;
}

// userName = userInput;

// NEVER returns anything
function generateError(message: string, code: number): never {
	throw { message: message, errorCode: code };
}

const result = generateError('An error ocurred', 500);
console.log(result);