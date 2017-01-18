


function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`)
})
}

function iterate(callback){

}

function iterate(callback) {
  const array = ["a", "b", "c"]

  array.forEach(callback)

  return array
}

function doToArray(array, callback){
  array.forEach(callback)

}
