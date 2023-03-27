function loan(type){
    if(type == 'Home Loan'){
        return (' you have selected for Home loan')
    }
    if(type == 'Personal Loan'){
        return (' you have selected for Personal loan')
    }
}
function person(gender, age){
    if(gender == 'male' && age >= 60){
        return (' your interest rate will 10%')
    }
    else if(gender == 'male' && age < 60){
        return (' your interst rate will be 15%')
    }
    else if(gender == 'female' && age >= 60){
        return (' your interest rate will 8%')
    }
    else if(gender == 'female' && age < 60){
        return (' your interest rate will 13%')
    }
    
}

function loans(type, gender, age){
    let applicant = 'Hey' + loan(type) + ' &' + person(gender, age)
return applicant
}
let newApplicant = loans('Home Loan', 'male', 56)
console.log(newApplicant)

let applicant2 = loans('Personal Loan', 'female', 68)
console.log(applicant2)