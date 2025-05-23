const MyNums =[1,2,3,4,5,6,7,8,9,10]

const newNum = MyNums.filter( (num) => num >  4)

// other way of writing filter

// const newNums = MyNums.filter((num) => {
//    return num > 2
// })

console.log(newNum)

// these are data objects

const books = [
    {title:"Book one",genre:"fiction",publish:1981,edition:2004},
    {title:"Book two",genre:"Non-fiction",publish:1991,edition:2001},
    {title:"Book three",genre:"Action",publish:1951,edition:2007},
    {title:"Book four",genre:"History",publish:1950,edition:1999}
]

const userBooks = books.filter( (bk) => bk.genre == "History");

console.log(userBooks)

//other way writing filter both works

const userBooks2 = books.filter( (bk) => {
    return bk.edition >= 2000;
})
console.log(userBooks2)

