var users = []

// function add user 
function addUser() {
    // Define desired object
    let userOne = {
        name: prompt("enter user name"),
        user_id: prompt("entr user id"),
        user_balance: prompt("enter user balance")

    };

    users.push(userOne)

}
addUser()
addUser()
addUser()
console.table(users)



// edit user 
function changeBalance() {
    var userId = prompt("edit userId")
    var newBalance = prompt("enter new balance")
    let found = users.find(ele => ele.user_id == userId);
    found.user_balance = newBalance
    console.table(users)
}
changeBalance()


// delete user
function delet() {
    var userId = prompt("edit userId")
    let found = users.find(ele => ele.user_id == userId);
    found.user_balance = users.splice(user_id, 1)
    console.table(users)
}

delet()