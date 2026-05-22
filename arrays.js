const users = [

"John Doe",
"Jane Smith",
"Bob Johnson",
"Emily Davis",
"Michael Brown",
"Sarah Wilson",
"David Lee",
"Jessica Taylor",
"Chris Anderson",
"Amy Martinez"
]; // create an array named users with 10 user names as string elements

console.log(users); // print the users array to the console
users.push("Tom Wilson"); // add a new user to the end of the array
console.log(users);
users[0] = "John Smith"; // update the first user in the array
users.splice(2, 1); // remove the third user from the array
console.log(users);