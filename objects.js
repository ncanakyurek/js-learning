const users = {

name: 'John Doe',

age: 30,

email: 'john@doe.com',

job: 'Software Engineer'

}; //  create object users named with 4 properties name, age, email, job


console.log(users); // print the users object to the console
users.birthday = '1992-01-01';  // news property add
console.log(users);
users.job = 'Senior Software Engineer'; // update the value of the job property
delete users.email; // delete the email property from the users object
console.log(users); 



