import fs from "fs";
import uniqid from "uniqid";

const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJson = dataBuffer.toString();
    const data = JSON.parse(dataJson);
    return data;
  } catch (e) {
    return [];
  }
};

const save = (data) => {
  const dataJson = JSON.stringify(data);
  fs.writeFileSync("users.json", dataJson);
};

const add = (newUser) => {
  const users = loadUsers();
  const duplicateUsers = users.filter((user) => user.email === newUser.email);
  if (duplicateUsers.length === 0) {
    users.push({ ...newUser, id: uniqid() });
    save(users);
  } else {
    console.log("Email is already exist");
  }
};

const deleteUser = (id) => {
  const users = loadUsers();
  const filteredUsers = users.filter((user) => user.id !== id);
  if (users.length !== filteredUsers.length) {
    save(filteredUsers);
  } else {
    console.log("No user with that specific id");
  }
};

const updateUser = (id, name, email) => {
  const users = loadUsers();
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    const updatedUser = { ...users[userIndex], name, email };
    users[userIndex] = updatedUser;
    save(users);
  } else {
    console.log("No user with that specific id");
  }
};

// console.log(loadUsers());
// add({ name: 'Mob', email: 'mob@example.com' });
// deleteUser('5uvkudu4l4cm3lmx');
updateUser("5uvku13wl4cms9dk", "Rob");
