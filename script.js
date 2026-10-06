let total = 0;

function addExpense() {

    const name = document.getElementById("expenseName").value;
    const amount = Number(
        document.getElementById("expenseAmount").value
    );

    const category = document.getElementById("category").value;

    if (name === "" || amount <= 0) {
        alert("Please enter a valid expense.");
        return;
    }

    total = total + amount;

    document.getElementById("total").textContent = total;

    const list = document.getElementById("expenseList");

    const item = document.createElement("li");

    item.innerHTML = `
        <span>
            ${name} - ₹${amount}
            <br>
            <small>${category}</small>
        </span>

        <button class="delete-btn"
                onclick="deleteExpense(this, ${amount})">
            Delete
        </button>
    `;

    list.appendChild(item);

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}

function deleteExpense(button, amount) {

    total = total - amount;

    document.getElementById("total").textContent = total;

    button.parentElement.remove();
}
