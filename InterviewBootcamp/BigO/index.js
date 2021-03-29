const input = new Array(1000).fill("ravi");

function simpleSearch(array) {
  const t1 = Date.now();
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === "kumar") {
      console.log("fount");
    }
  }
  const t2 = Date.now();
  console.log(t2 - t1, "milliseconds");
}

simpleSearch(input);
