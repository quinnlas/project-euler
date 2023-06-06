// "you should never use eval"
// 2n**1000n calculates the number
// adding it to '' converts it to string
// ...spreads the characters into the array
// join('+') to write them out like 1+0+7... as valid js for eval
module.exports=a=>eval([...''+2n**1000n].join('+'))