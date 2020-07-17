// Задание 12-1
const userObject = {
    userName: 'Artur',
    userAge: '29'
};
const userObjectNew = Object.create(userObject);
userObjectNew.ownUserName = 'Demkin';
function functionUser(userObjectNew){
    for (let key in userObjectNew) {
        if (userObjectNew.hasOwnProperty(key)) {
            console.log(key, userObjectNew[key])
        }
    }
};
functionUser(userObjectNew);