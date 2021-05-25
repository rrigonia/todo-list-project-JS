const todo = [];

let choice = prompt("What u want to do ?");

while (choice.toLowerCase() !== "quit") {

    if (choice.toLowerCase() === "new") {
        let add = prompt("What u want to add ?");
        todo.push(add);
    } else if (choice.toLowerCase() === "list") {
        let i = 0;
        console.log("*********");
        for (let things of todo) {
            console.log(`${i}: ${things}`);
            i++;
        }
        console.log("*********");

    } else if (choice.toLowerCase() === "delete") {
        let remove = prompt("Which one u want to remove ?");
        todo.splice(remove, 1);
    }

    choice = prompt("OK, Done! So, What u want to do now ?")
}
if (choice.toLowerCase() === "quit") {
    console.log("OK, You quit the App")
}


