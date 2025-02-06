

// JavaScript provides three types of popup boxes:

//Alert Box: Displays a message and an "OK" button. It is used to inform the user about something.

alert("This is an alert box!");

// Confirm Box: Displays a message, an "OK" button, and a "Cancel" button. It is used to get confirmation from the user.

if (confirm("Are you sure you want to do this?")) {
    // User clicked OK
} else {
    // User clicked Cancel
}

// Prompt Box: Displays a message, an input field, an "OK" button, and a "Cancel" button. It is used to collect input from the user.

let name = prompt("Please enter your name:", "John Doe");
if (name != null) {
    // User entered a value
} else {
    // User clicked Cancel
}