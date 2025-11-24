const userContainer = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

async function fetchUsers() {
    
    userContainer.innerHTML = "<h3>Loading users...</h3>";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("HTTP ERROR: " + response.status);
        }

        const users = await response.json();

        displayUsers(users);

    } catch (error) {
        userContainer.innerHTML = `<h3 style="color:red;">Failed to fetch data: ${error}</h3>`;
    }
}

function displayUsers(users) {
    userContainer.innerHTML = "";

    users.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, 
            ${user.address.city}</p>
        `;

        userContainer.appendChild(card);
    });
}

reloadBtn.addEventListener("click", fetchUsers);

fetchUsers(); // auto load on start
