/*
  Pads a string if it is shorter than the length, and adds 3 dots if larger
*/
export function sliceDots(str: string, numOfChars: number):string {
  if (str.length <= numOfChars){
    return str.padEnd(numOfChars, '-');
  }
  return `${str.slice(0, numOfChars - 3)}...`;
}