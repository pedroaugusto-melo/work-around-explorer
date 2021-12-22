const formatSalaryNumber = salary => {
    salary = salary.toFixed(2);
    let integerPartFormated = [];

    const separatedByComma = salary.split('.');

    for(let i = separatedByComma[0].length; i > 0 ; i -= 3){
        if(i < 3){
            integerPartFormated.unshift(separatedByComma[0].slice(0 , i));
            break;
        }
        
        integerPartFormated.unshift(separatedByComma[0].slice(i - 3 , i));
        
        if (i != 2 && i > 3) integerPartFormated.unshift(',');
    }
    
    return integerPartFormated.join('').concat('.', separatedByComma[1]);
};

export {formatSalaryNumber};