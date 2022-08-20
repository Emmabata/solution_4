const arr = ["jasper", "sam", "mike", "john", "James","bata"]

const compare = 'j'
const compareJ = 'J'

function printName(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let ss = element.split('')
    let arrrr = Array.from(element)
    // console.log("arrrrr:", arrrr)
    // console.log(typeof(ss[0]))
    console.log(ss[0])

    let name = ss.join('')
    if(compare !== ss[0] && compareJ !== ss[0]){
      console.log(`Hello ${name}`)
    } else {
      console.log(`Goodbye ${name}`)
    }
  }
}

console.log(printName(arr))