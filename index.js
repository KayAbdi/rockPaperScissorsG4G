const computerPlay = () => {
	const compChoices = ['Rock', 'Paper', 'Scissor'];
	const random = Math.floor(Math.random()*compChoices.length);
	const compChoice = compChoices[random];
	return compChoice; 
};


