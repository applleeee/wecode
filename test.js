const a = () => {
  const arr = [];
  for (let i = 1; i <= 50; i++) {
    arr.push(i);
  }
  const result = [];
  for (const i in arr) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
