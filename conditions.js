const age = 25;


if (age >= 18) {
console.log (`You are ${age} years old. You are an adult.`);
} else {

console.log (`You are ${age} years old. You are not an adult.`);

} //1 example




const age = 16;

if (age >= 18) {
  console.log("Yetişkin");
} else if (age >= 13) {
  console.log("Genç");
} else {
  console.log("Çocuk");
} //2 example




const age = 20;
const isLoggedIn = true;

if (age >= 18 && isLoggedIn) {
  console.log("Panele giriş yapabilir");
} else {
  console.log("Panele giriş yapamaz");
}    //3 example




const username = "naki";

if (username === "admin") {
  console.log("Yönetici paneline giriş");
} else {
  console.log("Normal kullanıcı");
}   //4 example





const password = "12345";

if (password.length >= 8) {
  console.log("Şifre güçlü");
} else {
  console.log("Şifre çok kısa");
}   //5 example