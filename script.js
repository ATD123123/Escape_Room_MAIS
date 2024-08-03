const stages = [
    {
        message: `Welcome to Dr. Andrew's Lab. It's dangerous to go alone, so you'll need to find something to help you on your journey. The tool you need is hidden in a box. To find the right box, choose the one with the same number as the number of letters in an ENVELOPE Hint: If the solution seems impossible, remember Edison's advice that there's always another solution. Enter the number of the box where the tool is hidden. Be cautious, as you only have two chances before you must turn back.`,
        correctAnswer: 1,
        passcode: "1*****",
        maxAttempts: 2
    },
    {
        message: `Password: 1*****\nYour tool when shined upon surfaces may reveal the path that must be taken. \nWhen you find the mirrors, what is the number of images you see when you keep the mirrors at 90 degrees? `,
        correctAnswer: 4,
        passcode: "14****",
        maxAttempts: 2
    },
    {
        message: `Password: 14****\nGreat progress so far, but this next clue deceives not just your eyes, but your ears as well! \nDepending on what the scientist tells you, enter the corresponding number: \nIf you hear 'Iphone', enter 1. If you hear 'I'm Home', enter 2. If you hear 'For a Knife', enter 3. If you hear Deception, enter 4\nBe careful, you only have 3 lives for this clue.`,
        correctAnswer: 4,
        passcode: "144***",
        maxAttempts: 3
    },
    {
        message: `Password: 144***\nA marvellous painting is it not? Admire it. It may be the last thing you will see in the lab. \nThere is a number hidden in the painting. Find it to move forward. \nBe careful, you only have 2 lives for this clue.`,
        correctAnswer: 6,
        passcode: "1446**",
        maxAttempts: 2
    },
    {
        message: `Password: 1446**\nA hidden number waits out of sight, \nan indicator will show it when treated right. \nApply a base to turn the liquid pink, \nAnd the number will be revealed in a blink.`,
        correctAnswer: 7,
        passcode: "14467*",
        maxAttempts: 2
    },
    {
        message: `Password: 14467*\nScan the Document given to you. The mistake in it will be The final digit you need. \nBe careful, you only have 2 lives for this clue.`,
        correctAnswer: 5,
        passcode: "144675",
        maxAttempts: 2
    },
    {
        message: `Password: 144675\nEnter the number you need in the lock of the chest. If you can find it.... \nAll that you need to escape will be in it among all the classified documents...`,
        correctAnswer: null,
        passcode: null,
        maxAttempts: null
    }
];

let currentStage = 0;
let attempts = 0;

const messageElement = document.getElementById('message');
const inputElement = document.getElementById('user-input');
const submitButton = document.getElementById('submit-button');
const nextButton = document.getElementById('next-button');

function displayStage() {
    const stage = stages[currentStage];
    messageElement.textContent = stage.message;
    inputElement.value = '';
    attempts = 0;
    nextButton.style.display = 'none';
}

function handleSubmit() {
    const stage = stages[currentStage];
    const userAnswer = parseInt(inputElement.value);

    if (userAnswer === stage.correctAnswer || stage.correctAnswer === null) {
        if (stage.passcode) {
            messageElement.textContent = `Password: ${stage.passcode}`;
        }
        nextButton.style.display = 'block';
    } else {
        attempts++;
        if (attempts >= stage.maxAttempts) {
            messageElement.textContent = `Your time here is up. Please exit the room immediately.`;
            submitButton.disabled = true;
        } else {
            messageElement.textContent = `Oops! You've lost a life! Only ${stage.maxAttempts - attempts} left.`;
        }
    }
}

function handleNext() {
    currentStage++;
    if (currentStage < stages.length) {
        displayStage();
        submitButton.disabled = false;
    } else {
        messageElement.textContent = 'Congratulations! You have escaped the room!';
        submitButton.disabled = true;
    }
}

submitButton.addEventListener('click', handleSubmit);
nextButton.addEventListener('click', handleNext);

displayStage();
