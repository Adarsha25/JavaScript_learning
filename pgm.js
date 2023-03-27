let employees = [{
    "name":"Adarsha",
    "designation":"CEO",
    "salary":2000000
},{
    "name":"Ganesh",
    "designation":"Trainee",
    "salary":200000
},{
    "name":"Kiran",
    "designation":"PM",
    "salary":500000
},{
    "name":"Raj",
    "designation":"Full Stack Dev",
    "salary":1000000
}];

function salaryCompare(employees){
    let names = []
    for(let i = 0; i < employees.length; i++){
        if(employees[i].salary >= 2000000){
           names.push(employees[i].name)
        }
    }
    return names
}

// let sal = salaryCompare(employees, 10000)
// console.log(sal)
let res = employees.filter(obj => obj.salary >= 1000000).map(obj => obj.name)
console.log(res)

