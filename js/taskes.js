"use strict";
import users from './users.js';

// const getUserNames = users => {
//    return users.map(user => user.name)
//   };

//   console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


// const getUsersWithEyeColor = (users, color) => {
//   const eyeColor = users.filter(user=>user.eyeColor===color);
//   return eyeColor;
// };

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

const getUsersWithGender = (users, gender) => {
  return users.filter(user=>user.gender===gender).map(user => user.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


// const getInactiveUsers = users => {
//   const inactive = users.filter(user=>user.isActive!==true);
//   return inactive;
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// const getUserWithEmail = (users, email) => {
//   const rightEmail = users.find(user=>user.email===email);
//   return rightEmail;
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


// const getUsersWithAge = (users, min, max) => {
//   let availableUsers = users.filter(user=>user.age>=min&&user.age<=max);
//   return availableUsers;
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// const calculateTotalBalance = users => {
//   const sum = users.reduce((totalSum, user) => totalSum + user.balance, 0);
//   return sum;
// };

// console.log(calculateTotalBalance(users)); // 20916

// const getUsersWithFriend = (users, friendName) => {
//   const usersObject = users.filter(user=>user.friends.includes(friendName));
//   const seperateUser = usersObject.map(user=>user.name);
//   return seperateUser;
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// const getNamesSortedByFriendsCount = users => {
//   const nameSorted = users.sort((a, b) => b.friends.length - a.friends.length);
//   const  nameSortedSeperate = nameSorted.map(item => item.name);

//   return nameSortedSeperate;
// };


// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// const getSortedUniqueSkills = users => 
//   users.reduce((allSkills, user) => {
//     allSkills.push(...user.skills);
//     let unique =  [...new Set(allSkills)];
//     let finalSort = unique.sort();
//     // allSkills.filter((currentScill, i, allSkills) => allSkills.indexOf(currentScill) === i);
//     return finalSort;
//   }, []);


// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]