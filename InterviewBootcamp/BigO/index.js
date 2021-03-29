const input = new Array(100000).fill("ravi");

function simpleSearch(array) {
  const hrStart = process.hrtime();
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === "kumar") {
      console.log("fount");
    }
  }
  const hrEnd = process.hrtime(hrStart);
  console.log(hrEnd, "nanoseconds");
}

simpleSearch(input);
