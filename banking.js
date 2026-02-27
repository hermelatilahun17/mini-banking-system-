let transactions = [];

function processTransaction() {

    let transaction = document.getElementById("type").value;
    let amount = parseFloat(document.getElementById("inputField").value);
    let currentBalance = parseFloat(document.getElementById("balance").value);

    if (isNaN(currentBalance) || isNaN(amount)) {
    document.getElementById("processText").innerHTML = "Please enter valid numbers.";
    return;
}
    if (transaction === "deposit") {

        let newBalance = currentBalance + amount;
        document.getElementById("balance").value = newBalance;

        let message = "Deposit successful.You Deposited $" + amount + ". New balance: $" + newBalance;
        document.getElementById("processText").innerHTML = message;

        transactions.push(message);

    } else if (transaction === "withdraw") {

        if (amount > currentBalance) {

            let message = "Insufficient funds. Current balance: $" + currentBalance;
            document.getElementById("processText").innerHTML = message;

            transactions.push(message);

        } else {

            let newBalance = currentBalance - amount;
            document.getElementById("balance").value = newBalance;

            let message = "Withdrawal successful.You withdrew $" + amount + ". New balance: $" + newBalance;
            document.getElementById("processText").innerHTML = message;

            transactions.push(message);
        }
    }
}

function showTransactions() {

    let historyDiv = document.getElementById("transactionHistory");
    historyDiv.innerHTML = "";

    for (let i = 0; i < transactions.length; i++) {
        let p = document.createElement("p");
        p.textContent = transactions[i];
        historyDiv.appendChild(p);
    }
}