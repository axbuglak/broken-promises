const { promisify } = require('util');
const sleep = promisify(setTimeout);

async function bar(n, s, t) {
  setImmediate(() => process.stdout.write(s));
  await sleep(n);
  return t;
}

async function foo() {
  process.stdout.write('L'); // 14
  for (const m of await Promise.all(
    [
      bar(
        20,
        'N', // 9
        'R' // 11
      ),
      bar(
        10,
        'T', // 10
        'E' // 12
      )
    ]
  ))
    process.stdout.write(m); // 15
}

sleep(50).then(() => process.stdout.write('A')); // 13

new Promise(res => {
  process.stdout.write('H'); // 1
  res('O'); // 5
}).then(m => process.stdout.write(m))
  .finally(() => process.stdout.write('M')); // 7

queueMicrotask(() => process.stdout.write(' ')); // 6

process.nextTick(() => process.stdout.write('L')); // 3

setTimeout(() => process.stdout.write('L'), 100); // 4

setImmediate(() => process.stdout.write('O')); // 8 -> second event loop

process.stdout.write('E'); // 2

foo();