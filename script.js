// script.js
let totalExpense = 0;

function addExpense() {
    const nameInput = document.getElementById('expense-name');
    const amountInput = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list');
    const totalExpenseElement = document.getElementById('total-expense');

    const expenseName = nameInput.value;
    const expenseAmount = parseFloat(amountInput.value);

    if (expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter a valid name and amount');
        return;
    }

    totalExpense += expenseAmount;

    const listItem = document.createElement('li');
    listItem.textContent = `${expenseName}: $${expenseAmount.toFixed(2)}`;

    expenseList.appendChild(listItem);
    totalExpenseElement.textContent = totalExpense.toFixed(2);

    nameInput.value = '';
    amountInput.value = '';
}
