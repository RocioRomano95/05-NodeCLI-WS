function split(arr) {
  let mitadDelArr = Math.floor(arr.length / 2);
  let primeraMitad = arr.slice(0, mitadDelArr);
  let segundaMitad = arr.slice(mitadDelArr);

  return [primeraMitad, segundaMitad];
}
