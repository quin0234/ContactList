const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

function upperCase(text){
    return text.split(' ').map(str => str[0].toUpperCase() + str.substring(1)).join(' ');
}

export function name({title = 'empty', first = 'empty', last = 'empty'} , withTitle = false){
    let wholeName = '';
    if (withTitle) {
        wholeName =  upperCase(title) + ' ';
    }
    wholeName += upperCase(first) + ' ' + upperCase(last);
    
    return wholeName;
}

export function dateOfBir(dob = '1900-01-01 00:00:01'){
    let date = new Date(dob);
    return month[date.getMonth()]+' '+date.getDate()+', '+date.getFullYear();
}

export function address({street = 'empty', city = 'empty', state = 'empty', postcode = 0}, line = 1){
    switch(line){
    case 1:
        return upperCase(street);
    case 2:
        return upperCase(city) + ', ' + upperCase(state);
    case 3:
        return postcode;
    }
}

export function age(dob = '1900-01-01 00:00:01'){
    let date = new Date(Date.now() - new Date(dob).getTime());
    return Math.abs(date.getUTCFullYear() - 1970);
}
