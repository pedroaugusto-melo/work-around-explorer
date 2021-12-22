import { salaryData } from "./salaryData.js";

const getCompanies = () => {
    const companies = [salaryData[0].company];

    salaryData.forEach(combination => {
        let alreadyAdd = false;

        companies.forEach(company => {
            if(combination.company === company) alreadyAdd = true; 
        });

        if(!alreadyAdd) companies.push(combination.company);
    });

    return companies;
};

const getRoles = () => {
    const roles = [salaryData[0].role];

    salaryData.forEach(combination => {
        let alreadyAdd = false;

        roles.forEach(role => {
            if(combination.role === role) alreadyAdd = true; 
        });

        if(!alreadyAdd) roles.push(combination.role);
    });

    return roles;
};

const getSalaryAtCompany = (role, company) => {
    let salary = 0;

    salary = salaryData.filter(combination => {
        return (combination.role === role && combination.company === company);
    })[0].salary;

    return salary;
}

const getAverageIndustry = role => {
    let average = 0;

    salaryData.forEach(combination => {
        if (combination.role === role) average += combination.salary;
    });

    average /= getCompanies().length;

    return average;
};

const getAverageCompany = company => {
    let average = 0;

    salaryData.forEach(combination => {
        if (combination.company === company) average += combination.salary;
    });

    average /= getRoles().length;

    return average;
}

const getAverageTech = () => {
    const companies = getCompanies();
    let average = 0;

    
    companies.forEach(company => {
        average += getAverageCompany(company);
    });

    average /= companies.length;

    return average;
}

export {getCompanies, getRoles, getSalaryAtCompany, getAverageIndustry, getAverageCompany, getAverageTech};