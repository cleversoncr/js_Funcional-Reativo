
function ordenar(array) {
  return [...array].sort()
}
const nums = Object.freeze([3, 1, 7, 9, 4, 6]) //Congela o objeto e não permite qualquer alteração
const numsOrdenados = ordenar(nums)
console.log(nums, numsOrdenados)

const parteNums = nums.slice(2)

console.log(parteNums, nums)