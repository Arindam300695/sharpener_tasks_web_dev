const posts = [];
let count = 0;
//Do not touch this function
function createPost(callBack) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: `POST${count}` });
      const post = posts[count].title;
      resolve(
        post,
        callBack().then((currentTime) => {
          console.log(currentTime);
        })
      );
      count++;
    }, 1000);
  });
}

//Do not touch this function
function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const poppedElement = posts.pop();
        resolve(poppedElement);
      } else {
        reject("ERROR: ARRAY IS EMPTY");
      }
    }, 2000);
  });
}

//update user actiovity
function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currentTime = new Date().getTime();
      resolve(currentTime);
    }, 1000);
  });
}

Promise.all([
  createPost(updateLastUserActivityTime),
  createPost(updateLastUserActivityTime),
  createPost(updateLastUserActivityTime),
  createPost(updateLastUserActivityTime),
  deletePost(),
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
