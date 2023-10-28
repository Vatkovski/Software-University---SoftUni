function checkPassword(password) {
    const correctPassword = "s3cr3t!P@ssw0rd";
    if (password == correctPassword) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

checkPassword(["s3cr3t!P@ssw0rd"]); 
