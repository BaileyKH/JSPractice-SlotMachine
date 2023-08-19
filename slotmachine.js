// 1. Deposit some money
// 2. Determine number of lines to bet on 
// 3. Collect a bet amount
// 4. Spin slot machine
// 5. Chcek if user won
// 6. Give user winnings / take loses
// 7. Play again / let user know they have nothing left to bet with

const prompt = require('prompt-sync')();

const deposit = () => {
    const depositAmount = prompt('Enter a deposit amount: ')
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again!")
        }
}

deposit();