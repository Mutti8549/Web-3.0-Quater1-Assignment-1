const current_users = ['Talha', 'Mutti', 'Ali', 'Irfan', 'Warisha'];
const new_users = ['Gohar', 'tina', 'Lisa', 'David', 'Brian'];

for (const new_user of new_users) {
  if (current_users.includes(new_user)) {
    console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
  } else {
    console.log(`The username '${new_user}' is available.`);
  }
}
