const users=[

    "John Doe",
    "Jane Doe",
    "Alice Smith",
    "Bob Johnson",
    "Charlie Brown",
    "Emily Davis",
    "Michael Wilson",
    "Sarah Miller",
    "David Anderson",
    "Jessica Taylor"
];

 const userList=document.getElementById("users-list");
 users.map((user) => {
   
    userList.innerHTML += `<li>${user}</li>`;
 });    