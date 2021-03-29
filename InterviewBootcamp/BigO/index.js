const input = new Array(1000).fill("ravi");

function simpleSearch(array) {
  const t1 = process.hrtime();
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === "kumar") {
      console.log("fount");
    }
  }
  const t2 = process.hrtime(t1);
  console.log(t2, "milliseconds");
}

simpleSearch(input);
