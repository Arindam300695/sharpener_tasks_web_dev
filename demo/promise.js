// const posts = [];
// let count = 0;
// //Do not touch this function
// function createPost(callBack) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push({ title: `POST${count}` });
//       const post = posts[count].title;
//       resolve(
//         post,
//         callBack().then((currentTime) => {
//           console.log(currentTime);
//         })
//       );
//       count++;
//     }, 1000);
//   });
// }

// //Do not touch this function
// function deletePost() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (posts.length > 0) {
//         const poppedElement = posts.pop();
//         resolve(poppedElement);
//       } else {
//         reject("ERROR: ARRAY IS EMPTY");
//       }
//     }, 2000);
//   });
// }

// //update user actiovity
// function updateLastUserActivityTime() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = new Date().getTime();
//       resolve(currentTime);
//     }, 1000);
//   });
// }

// Promise.all([
//   createPost(updateLastUserActivityTime),
//   createPost(updateLastUserActivityTime),
//   createPost(updateLastUserActivityTime),
//   createPost(updateLastUserActivityTime),
//   deletePost(),
// ])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function print(strs) {
//   let cur = strs[0];
//   let temp = "";
//   for (let i = 1; i < strs.length; i++) {
//     for (let j = 0; j < cur.length; j++) {
//       if (cur[j] == strs[i][j]) {
//         temp += cur[j];
//       } else {
//         break;
//       }
//     }
//     cur = temp;
//     temp = "";
//   }
//   //   return cur;
//   console.log(cur);
// }
// print(["flower", "flow", "flight"]);
// print(["ab", "a"]);
// print(["dog", "racecar", "car"]);

// function print(arr) {
//   let storeZeroindexes = [];
//   let temp = arr;
//   let max = 0;
//   let index = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if ((arr[i] == 0 && arr[i + 1] == 1) || (arr[i] == 0 && arr[i - 1] == 1)) {
//       storeZeroindexes.push(i);
//     }
//   }
//   for (let i = 0; i < storeZeroindexes.length; i++) {
//     temp[storeZeroindexes[i]] = 1;
//     let count = storeZeroindexes[i];
//     let track = 1;
//     let prev = count - 1;
//     let next = count + 1;
//     while (
//       (temp[count] == 1 && temp[prev] == 1 && prev >= 0) ||
//       (temp[count] == 1 && temp[next] == 1 && next <= temp.length)
//     ) {
//       if (temp[count] == 1 && temp[prev] == 1 && prev >= 0) {
//         prev--;
//         track++;
//       }
//       if (temp[count] == 1 && temp[next] == 1 && next <= temp.length) {
//         next++;
//         track++;
//       }
//     }
//     if (track > max) {
//       max = track;
//       index = count;
//     }
//     temp[storeZeroindexes[i]] = 0;
//   }
//   return index;
// }
// conosle.log(print([0, 0, 1, 0, 1, 1, 1, 0, 1, 1]));
// conosle.log(print([0, 1, 1, 0, 0]));
// conosle.log(print([1, 1]));
// conosle.log(print([0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0]));

// function print(nums) {
//   // let nums = [10, 19, 6, 3, 5];
//   let sortedNums = [...nums];
//   let count = 0;
//   for (let i = 0; i < sortedNums.length; i++) {
//     for (let j = 0; j < sortedNums.length - i; j++) {
//       if (sortedNums[j] > sortedNums[j + 1]) {
//         let t = sortedNums[j];
//         sortedNums[j] = sortedNums[j + 1];
//         sortedNums[j + 1] = t;
//       }
//     }
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== sortedNums[i]) {
//       count++;
//     }
//   }
//   console.log(count / 2);
// }
// print([10, 19, 6, 3, 5]);
// print([10, 19, 6, 3, 5]);
// print([14, 20, 2, 3, 25]);
// print([6, 4, 2, 14, 8, 10, 12, 16]);
// print([5, 4, 3, 2, 1]);

// function print(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (Math.abs(5 - arr[j]) > Math.abs(5 - arr[j + 1])) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//       if (Math.abs(5 - arr[j]) == Math.abs(5 - arr[j + 1])) {
//         if (arr[j] > arr[j + 1]) {
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//       }
//     }
//   }
//   console.log(arr);
// }
// print([1, 3, 5, 7, 9]);
// print([7, 8, 10, 1, 4, 9]);

// function print(n) {
//   let ans = [];
//   let temp1;
//   let temp2;
//   let no = 10;
//   for (let i = 0; i < n; i++) {
//     let sum = 0;
//     temp1 = no;
//     temp2 = no;
//     while (temp1 > 0) {
//       temp2 = temp1 % 10;
//       sum += temp2;
//       temp1 = Math.floor(temp1 / 10);
//     }
//     if (no % sum == 0) {
//       ans.push(no);
//     }
//     no++;
//   }
//   console.log(ans);
// }
// print(50);

// function print() {
//   for (let i = 0; i < 5; i++) {
//     let str2 = "";
//     for (let j = 0; j < i + 1; j++) {
//       str2 += "*";
//     }
//     console.log(str2);
//   }
//   for (let i = 0; i < 5; i++) {
//     let str2 = "";
//     for (let j = 5; j > i; j--) {
//       str2 += "*";
//     }
//     console.log(str2);
//   }
// }
// print();

// function print(str2) {
//   let ans = "";
//   let moving = str2.length;
//   let pointer1 = 0;
//   let last = 0;
//   for (let i = str2.length; i > 0; i--) {
//     if (str2[i] == " ") {
//       pointer1 = i + 1;
//       // console.log(pointer1);
//       while (pointer1 < moving) {
//         ans += str2[pointer1];
//         pointer1++;
//       }
//       ans += " ";
//       moving = i;
//     }
//     if (i == 1) {
//       while (last < moving) {
//         ans += str2[last];
//         last++;
//       }
//     }
//   }
//   return ans;
// }
// print("Eat Sleep Code Repeat");
// print("I love to code in Sharpener");

// function print(arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]] == undefined) {
//       obj[arr[i]] = 1;
//     } else {
//       obj[arr[i]]++;
//     }
//   }
//   for (let key in obj) {
//     if (obj[key] === 2) return true;
//     else return false;
//   }
// }
// console.log(print([1, 2, 3, 4]));
// console.log(print([1, 2, 3, 1]));

// function print(arr) {
//   let max = 0;
//   let store = [];
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i][j] == "a") count++;
//     }
//     store.push(count);
//   }
//   for (let i = store.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (store[j] < store[j + 1]) {
//         [store[j], store[j + 1]] = [store[j + 1], store[j]];
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//       if (store[j] === store[j + 1]) {
//         if (arr[j].length < arr[j + 1].length) {
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//       }
//     }
//   }
//   return arr;
// }
// console.log(print(["vaibhav", "almanac", "is", "fat", "button", "aabaca"]));

// function print(arr) {
//   let max = 0;
//   let temp = max;
//   let index;
//   for (let i = 0; i < arr.length; i++ && arr.length > 3) {
//     max = arr[i];
//     index = temp;
//     if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1] && i < arr.length && i > 0) {
//       index = i;
//     }
//   }
//   // return index;
//   console.log(index);
// }
// print([1, 2, 1, 3, 5, 6, 4]);
// print([1, 2, 3, 1]);
// print([1, 2, 3, 4, 5, 6]);
// print([4, 3, 2, 1]);

// function print(arr) {
//   let sum1 = 0;
//   let flag = false;
//   for (let i = 0; i < arr.length; i++) {
//     let sum2 = 0;
//     sum1 += arr[i];
//     let j = i + 1;
//     while (j < arr.length) {
//       sum2 += arr[j];
//       j++;
//     }
//     if (sum1 === sum2) {
//       flag = true;
//     }
//     if (flag) return true;
//   }
//   return false;
// }
// console.log(print([1, 2, 0, 3]));
// console.log(print([1, 2, 3, 2, 1, 2, 5]));
// console.log(print([1, 5]));
// console.log(print([1, 5, 2, 3, 11]));
// print([1, 2, 0, 3]);

// function print(str1, str2) {
//   let temp = "";
//   let add = "";
//   for (let i = 0; i < str2.length; i++) {
//     let num = 0;
//     num = parseInt(str2[i]);
//     // console.log(num);
//     if (num !== NaN) {
//       add = str1.slice(i, num + 1);
//     }
//     console.log(add);
//   }
// }
// print("SHARPENER", "S3P3R");

// function print(arr, N) {
//   let duplicate = 0;
//   let operations = 0;
//   for (let i = N; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   for (let i = 0; i < N; i++) {
//     for (let j = i + 1; j < N; j++) {
//       let temp = 0;
//       if (arr[i] == arr[j]) {
//         duplicate = arr[j];
//         arr[j] = arr[i] + 1;
//         temp = arr[j] - duplicate;
//         operations += temp;
//       }
//     }
//   }
//   return operations;
// }
// console.log(print([1, 3, 4, 2, 4, 1, 5, 8, 9, 10], 10)); //ans 8
// console.log(print([1, 1, 2, 3], 4)); //ans 3
// console.log(print([1, 1, 1, 1, 5, 6, 7, 8, 9, 10], 10)); //ans 6
// console.log(print([1, 2, 3, 1, 4], 5)); //ans 4

// function print(str1, str2) {
//   let split = [];
//   let num = [];
//   let tobeRemoved = [];
//   let changed = "";
//   split = str2.split("");
//   for (let i = 0; i < split.length; i++) {
//     let enter = 0;
//     if (Number(split[i]) > enter) {
//       num.push(Number(split[i]));
//       tobeRemoved.push(split[i - 1]);
//     }
//   }
//   for (let i = 0; i < str1.length; i++) {
//     changed += str1[i];
//     for (let j = 0; j < tobeRemoved.length; j++) {
//       if (str1[i] === tobeRemoved[j]) {
//         changed += num[j];
//         i += num[j];
//       }
//     }
//   }
//   if (changed === str2) return true;
//   else return false;
// }
// console.log(print("SHARPENER", "S3P3R"));
// console.log(print("DFS", "D1D"));
// console.log(print("ARINDAM", "A2N2M"));
// function print(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j <= arr.length; j++) {
//       let sum = 0;
//       let store = [];
//       for (let k = i; k < j; k++) {
//         sum += arr[k];
//         store.push(arr[k]);
//       }
//       if (sum > max) max = sum;
//     }
//   }
//   return max;
// }
// print([5, 2, -4, -5, 3, -1, 2, 3, 1]);
