// script.js
let expenses = [];

function addExpense() {
    const description = document.getElementById('expenseDescription').value;
    const value = parseFloat(document.getElementById('expenseValue').value);

    if (description && !isNaN(value) && value > 0) {
        expenses.push({ description, value });
        updateExpensesList();
        document.getElementById('expenseDescription').value = '';
        document.getElementById('expenseValue').value = '';
        calculateBalance(); // Update the balance immediately after adding an expense
    } else {
        alert('Please enter a valid description and a positive value for the expense.');
    }
}

function updateExpensesList() {
    const list = document.getElementById('expensesList');
    list.innerHTML = '';
    expenses.forEach((expense, index) => {
        const item = document.createElement('li');
        item.textContent = `${expense.description}: €${expense.value.toFixed(2)}`;
        list.appendChild(item);
    });
}

function calculateBalance() {
    const initialBalance = parseFloat(document.getElementById('initialAccountBalance').value);
    const primaryIncome = parseFloat(document.getElementById('primaryIncome').value);
    const secondaryIncome = parseFloat(document.getElementById('secondaryIncome').value);

    if (isNaN(initialBalance) || isNaN(primaryIncome) || isNaN(secondaryIncome)) {
        alert('Please ensure you enter valid values for the initial balance and incomes.');
        return;
    }

    // Calculate the total of expenses
    const totalExpenses = expenses.reduce((acc, curr) => acc + curr.value, 0);

    // Calculate the final balance for the month
    const finalBalance = initialBalance + primaryIncome + secondaryIncome - totalExpenses;

    // Display the final balance
    const balanceElement = document.getElementById('finalBalance');
    balanceElement.textContent = `Final Monthly Balance: €${finalBalance.toFixed(2)}`;
}

function validatePositiveInput(input) {
    if (parseFloat(input.value) < 0) {
        input.value = 0;
        alert('Please enter a positive value.');
    }
}
