// Задание 12-2
const userObject = {
    userName: 'Artur',
    userNike: 'Avdemkin',
    userAge: '29',
};
function functionFindUser(string, userObject) {
    return string in userObject;
};
console.log(functionFindUser('userName', userObject));
console.log(functionFindUser('userNike', userObject));
console.log(functionFindUser('userAge', userObject));