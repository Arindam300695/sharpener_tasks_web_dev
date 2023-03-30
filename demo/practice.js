// function print(arr, m) {
//   let difference = Infinity;
//   // sortingh the array
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   // program to find out the minimum difference between the maximum packet and the minimum packet
//   for (let i = 0; i < arr.length; i++) {
//     let pointer1 = arr[i]; // pointer1 which will point towards the minimum packet
//     let pointer2 = arr[i + m - 1]; // pointer2 which will point towards the maximum packet
//     // comparing the difference between max pack of chocklate and min pack of chocklate
//     if (pointer2 !== undefined && pointer2 - pointer1 < difference) {
//       difference = pointer2 - pointer1;
//     }
//   }
//   console.log(difference);
// }
// print([7, 3, 2, 4, 9, 12, 56], 3);
// print([3, 4, 1, 9, 56, 7, 9, 12], 5);
// print([12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50], 7);

// function print(arr, target) {
//   let index = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (Math.abs(arr[i] - arr[j]) === target) index.push(i, j);
//     }
//   }
//   return index;
// }
// console.log(print([9, 5, 1, 11, 14], 2));
// console.log(print([10, 19, 11, 1, 6], 13));

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
//   for (let m = store.length; m > 0; m--) {
//     for (let j = 0; j < m - 1; j++) {
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

function print(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  let firstOccurrence;
  let lastOccurrence;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == x) {
      end = mid - 1;
    } else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    firstOccurrence = start;
  }
  start = 0;
  end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == x) {
      start = mid + 1;
    } else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    lastOccurrence = end;
  }
  console.log("firstOccurence", firstOccurrence);
  console.log("lastOccurence", lastOccurrence);
}
print([1, 3, 5, 5, 5, 5, 67, 123, 125], 5);
print([1, 3, 5, 5, 5, 5, 7, 123, 125], 7);
