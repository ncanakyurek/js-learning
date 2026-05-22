const usersMap = [

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

 document.getElementById("users-listmap").innerHTML = usersMap.map(user => `<li>${user}</li>`).join(''); // display the users array as a list in the HTML element with id "users-list"
 