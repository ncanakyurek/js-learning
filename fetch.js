fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {

    const usersList = document.getElementById("api-users");

    data.map((user) => {

      const li = document.createElement("li");

      li.textContent = `${user.name} - ${user.email}`;

      usersList.appendChild(li);

    });

  });