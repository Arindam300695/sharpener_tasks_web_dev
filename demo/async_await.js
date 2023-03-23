// console.log("person1: sohows ticket");
// console.log("person2: shows ticket");
// const promiseWifeBringingTicket = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("ticket");
//   }, 3000);
// });
// const getPopcorn = promiseWifeBringingTicket.then((t) => {
//   console.log("wife: here is the ticket");
//   console.log("husband: we should go in");
//   console.log("wife: no I am hungry");
//   return new Promise((resolve, reject) => resolve(`${t} popcorn`));
// });
// const getButter = getPopcorn.then((t) => {
//   console.log("husband: I got some popcorn");
//   console.log("husband: we should go in");
//   console.log("wife: I need butter on my popcorn");
//   return new Promise((resolve, reject) => resolve(`${t} butter`));
// });
// const getCoke = getButter.then((t) => {
//   console.log("husband: I got the butter on the popcorn");
//   console.log("husband: can we go in now?");
//   console.log("wife: ohh! I forgot about the cokes");
//   return new Promise((resolve, reject) => resolve(`${t} coke`));
// });
// getCoke.then((t) => console.log(t));
// console.log("perosn4: shows ticket");
// console.log("perosn5: shows ticket");

// same code using async await
// console.log("person1: sohows ticket");
// console.log("person2: shows ticket");
// const preMovie = async () => {
//   const promiseWifeBringingTicket = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("ticket");
//     }, 3000);
//   });
//   const getPopcorn = new Promise((resolve, reject) => resolve("popcorn"));
//   const addButter = new Promise((resolve, reject) => resolve("butter"));
//   const getCoke = new Promise((resolve, reject) => resolve("coke"));
//   let ticket = await promiseWifeBringingTicket;
//   console.log(`wife: here is the ${ticket}`);
//   console.log("husband: we should go in");
//   console.log("wife: no I am hungry");
//   let popcorn = await getPopcorn;
//   console.log(`husband: I got some popcorn ${popcorn}`);
//   console.log("husband: we should go in");
//   console.log("wife: I need butter on my popcorn");
//   let butter = await addButter;
//   console.log(`husband: I got some ${butter}`);
//   console.log("husband: anything else darling?");
//   console.log("wife: ohh! I forgot about the cokes!");
//   let coke = await getCoke;
//   console.log(`husband: hey, I got the ${coke} too!!`);
//   console.log("wife: aww!! so sweet of you!");
//   console.log("wife: lets go, we are getting late");
//   console.log("husband: thanks for the reminder");
//   return ticket;
// };
// preMovie().then((m) => console.log(m));
// console.log("perosn4: shows ticket");
// console.log("perosn5: shows ticket");
