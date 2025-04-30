function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // Call the callback function
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Alice", sayBye);
