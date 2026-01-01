const salesData  = [10,55,44,33,55]

const total  = salesData.reduce((acc, int)=> acc+int);

// console.log(salesData.filter((el)=> el % 2 == 0))

const items = [
    {name: "Pritam", activity: 32},
    {name: "John", activity: 51},
    {name: "Jane", activity: 21},
    {name: "Jim", activity: 41},
    {name: "Jill", activity: 11},
    {name: "Jack", activity: 31},
    {name: "Jill", activity: 11},
]

const mostActiveUser = items.reduce((acc, int)=> acc.activity > int.activity ? acc : int);
// console.log(mostActiveUser)


salesData.reduce((acc, int)=>{
    // console.log(acc, int)
    // acc += int

    console.log(`acc ${acc} int ${int}`)
    return acc + int
    // console.log(int)
}, 0)

const expenses = [
    {description: "Groceries", amount: 1000, category: "Food"},
    {description: "Electricity Bill", amount: 1000, category: "Bills"},
    {description: "Dinner", amount: 1000, category: "Food"},
    {description: "WIfi Bill", amount: 1000, category: "Bills"},
]

const expenseReport = expenses.reduce((report, exp)=>{
    report[exp.category] = ( report[exp.category] || 0) +  exp.amount;
    return report;
},{})
console.log(expenseReport)


const tasks = [
    {description: "Write Todo", completed: false, priority: 2},
    {description: "project", completed: false, priority: 1},
    {description: "Send Email", completed: true, priority: 3},
    {description: "Send", completed: false, priority: 1000},
]

const pendingTasks = tasks.filter((el) => !el.completed).sort((a,b)=> a.priority - b.priority)

// console.log(pendingTasks)



const movieRatings = [
    {title: "Movie 1", rating: [4,5,3]},
    {title: "Movie 2", rating: [2,3,4]},
    {title: "Movie 3", rating: [5,5,5]},
    {title: "Movie 4", rating: [1,2,3]},
    {title: "Movie 5", rating: [3,3,3]},
]

const avg ={}
const averageRatings = movieRatings.map((items, index) => {

    const total = items.rating.reduce((acc, int)=> acc +int)
    const average = total / items.rating.length
    items.ratings = average;
    return items;
})

console.log(averageRatings)
console.log(movieRatings)