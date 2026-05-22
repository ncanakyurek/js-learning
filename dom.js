const users = [
  "John Doe",
  "Jane Smith",
  "Bob Johnson"
];

const usersList = document.getElementById("users-list");

usersList.innerHTML += `<li>${users[0]}</li>`;
usersList.innerHTML += `<li>${users[1]}</li>`;
usersList.innerHTML += `<li>${users[2]}</li>`; //array get list
