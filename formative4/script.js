// Array to store user data
const userData = [];

// Function to add user data to the table
function addUserToTable(user) {
    const tableBody = document.querySelector("#dataTable tbody");
    const row = document.createElement("tr");

    Object.values(user).forEach(value => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    // Add hover effect to change row color
    row.addEventListener("mouseover", () => {
        row.style.backgroundColor = "#e0ffff";
    });
    row.addEventListener("mouseout", () => {
        row.style.backgroundColor = "";
    });

    tableBody.appendChild(row);
}

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const user = {
        idNumber: document.getElementById("idNumber").value,
        firstName: document.getElementById("firstName").value,
        middleName: document.getElementById("middleName").value,
        lastName: document.getElementById("lastName").value,
        gender: document.getElementById("gender").value,
        birthday: document.getElementById("birthday").value
    };

    userData.push(user);
    addUserToTable(user);
    this.reset(); // Clear form
});
