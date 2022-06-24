
const keys={
    employees:'employees',
    employeeId:'employeesId'
}


export function insertEmployee(data){
    let employees= getAllEmployees();
    data['id']= generateEmployeeId()
    employees.push(data)
    localStorage.setItem(keys.employees, JSON.stringify(employees))
}

export function generateEmployeeId(){
    if (localStorage.getItem(keys.employeeId)==null)
        localStorage.setItem(keys.employeeId,"0")
    
    var id= parseInt(localStorage.getItem(keys.employeeId))
    localStorage.setItem(keys.employeeId,(++id).toString())
    return id;
}


export function getAllEmployees(){
    if (localStorage.getItem(keys.employees)== null)
        localStorage.setItem(keys.employees, JSON.stringify([]))

    return JSON.parse(localStorage.getItem(keys.employees));
}