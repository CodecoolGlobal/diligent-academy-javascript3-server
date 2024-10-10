const prompt = require("prompt-sync")();


const filterName = prompt("Enter the name to filter users: ");
fetch(`http://localhost:3000/filterUsersName?name=${filterName}`)
  .then((res) => res.json())
  .then((data) => console.log("Filtered users: ", data))
  .catch((err) => console.error(err));


const newName = prompt("Enter the name of the new user: ");
fetch("http://localhost:3000/addUser", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: newName }),
})
  .then((res) => res.json())
  .then((data) => console.log("New user added: ", data))
  .catch((err) => console.error(err));


const updateId = prompt("Enter the ID of the user to update: ");
const updateName = prompt("Enter the new name for the user: ");
fetch(`http://localhost:3000/updateUser/${updateId}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: updateName }),
})
  .then((res) => res.json())
  .then((data) => console.log("User updated: ", data))
  .catch((err) => console.error(err));


const deleteId = prompt("Enter the ID of the user to delete: ");
fetch(`http://localhost:3000/deleteUser/${deleteId}`, {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
