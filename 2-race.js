'use strict';

const sleep = ms => new Promise(r => setTimeout(r, ms));

const client = { name: 'alex', born: 1990 };

const check = async () => {
  if (client.born !== 121) return;
  await sleep(100);
  console.log('alex detected');
  console.log(client);
};

setTimeout(() => {
  client.name = 'gogi';
  client.born = 2007;
}, 50);

check(); // exit from func

// ********* //

// const { promisify } = require('util');
// const sleep = promisify(setTimeout);

// const pay = async (from, to, amount) => {
//   const { balance } = to;
//   from.balance -= amount;
//   await sleep(20); // waiting to all promises
//   to.balance = balance + amount;
// };

// const alex = { name: 'alex', balance: 1000 };
// const gogi = { name: 'gogi', balance: 1000 };

// pay(alex, gogi, 100);
// pay(gogi, alex, 200);
// pay(alex, gogi, 300);
// pay(gogi, alex, 350);
// pay(alex, gogi, 400);

// setTimeout(() => {
//   console.log({ alex, gogi }); // { name: 'alex', balance: 950 }, { name: 'gogi', balance: 850 }
// }, 1000);