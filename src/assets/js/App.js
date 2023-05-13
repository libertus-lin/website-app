
const userName = prompt("Username:");
const password = prompt("Password:");

if(userName === "admin"){
    if(password === "admin"){
        document.write("<h2>Login Successfull!</h2>");
    } else {
        document.write("<p>Login Gagal</p>");
    }
} else {
    document.write("<p>Anda tidak terdaftar!</p>");
}