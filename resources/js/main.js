import { getCompanies, getRoles, getSalaryAtCompany, getAverageIndustry, getAverageCompany, getAverageTech } from "./handleData.js";
import { formatSalaryNumber } from "./utilities.js";

const generateSections = (typeSection, itemsSection) => {
    const sec = document.createElement('section');
    sec.setAttribute('id', `${typeSection}`);

    const textHead = document.createElement('h2');
    textHead.innerHTML = `Select a ${typeSection}`;
    sec.appendChild(textHead);

    itemsSection.forEach(item => {
        const input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', `${typeSection}`);
        input.setAttribute('value', `${item}`);
        input.setAttribute('id', `${item}`);
        input.addEventListener('click', updateDetails);

        const label = document.createElement('label');
        label.setAttribute('for', `${item}`);
        label.innerHTML = ` ${item}<br><br>`;

        sec.appendChild(input);
        sec.appendChild(label);
    });

    document.querySelector('main').prepend(sec);
};

const updateDetails = () => {
    let role = document.querySelector('input[name=role]:checked');
    let company = document.querySelector('input[name=company]:checked');
    
    if(role && company){
        role = role.getAttribute('value');
        company = company.getAttribute('value');

        const salaryCompany = document.getElementById('salary-company');
        const averageIndustry = document.getElementById('average-industry');
        const averageCompany = document.getElementById('average-company');
        const averageTech = document.getElementById('average-tech');

        salaryCompany.innerHTML = `The salary for ${role} at ${company} is $${formatSalaryNumber(getSalaryAtCompany(role, company))}`;
        averageIndustry.innerHTML = `The industry average salary for ${role} positions is $${formatSalaryNumber(getAverageIndustry(role))}`;
        averageCompany.innerHTML = `The average salary at ${company} is $${formatSalaryNumber(getAverageCompany(company))}`;
        averageTech.innerHTML = `The average salary in Tech industry is $${formatSalaryNumber(getAverageTech())}`;
    }
};

generateSections('company', getCompanies());
generateSections('role', getRoles());

