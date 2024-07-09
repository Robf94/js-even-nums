function printEven(startNum, endNum) {
  let evenNum = [];

  if (startNum > endNum) {
    let temp = startNum;
    startNum = endNum;
    endNum = temp;
  }

  for (let i = startNum; i <= endNum; i++) {
    if (i % 2 === 0) {
      evenNum.push(i);
    }
  }

  return evenNum;
}

console.log(printEven(2, 100));
