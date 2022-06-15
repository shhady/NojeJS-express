export const postNumber = (array, num) => {
  const duplicate = array.find((n) => n === num);
  if (duplicate) throw new Error("number exists");
  array.push(parseInt(num));
  return array;
};

export const deleteArr = (array, num) => {
  const duplicate = array.find((n) => n === num);
  if (duplicate) throw new Error("number exists");
  const filteredNumbers = array.filter((number) => number !== num);
  return filteredNumbers;
};

export const updateArr = (array, num, newNum) => {
  const numIndex = array.findIndex((number) => number === num);
  array[numIndex] = newNum;
  return array;
  //   if (numIndex !== -1) {
  //     const updatedArr = { ...number[numberIndex] };
  //     number[numberIndex] = updatedArr;
  //     save(array);
  //   }
};
