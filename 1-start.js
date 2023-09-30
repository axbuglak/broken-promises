'use strict';
// *** Don't pass an async func or promises to a callback *** //


// new Promise(async (resolve, reject) => {
//   throw new Error('boom');
// }).catch(err => {
//   console.log('hello');
//   console.log({ err });
// }); // Error('boom')


// new Promise((resolve, reject) => {
//   throw new Error('boom');
// }).catch(err => {
//   console.log('hello');
//   console.log({ err });
// }); // catch will work


// ************** //

// const f = () => new Promise(async (res, req) => {
//   await console.log(1);
//   res(console.log(2))
// });

const f = async () => {
  await console.log(1);
  console.log(2);
};

f();
f();
// 1 1 2 2