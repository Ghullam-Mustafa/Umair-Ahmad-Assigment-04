// erase data value
document.getElementById('erase').onclick = function () {
    document.getElementById('data').value = "";
}

//  output erase 
document.getElementById('Clean').onclick = function () {
    document.getElementById('output').innerHTML = "";
}

// orignal cities
let orignalCities = "I love Pakistan <br> I love Faisalabad <br> I love Motherland"


//  Convert lowwer case 
document.getElementById('Lowercase').onclick = function () {
    let Lowercase = orignalCities.toLocaleLowerCase()

    document.getElementById('output').innerHTML = Lowercase
}

// convert Upper case
document.getElementById('Uppercase').onclick = function () {
    
    let Uppercase = orignalCities.toLocaleUpperCase()

    document.getElementById('output').innerHTML = Uppercase
}

// convert Capitalize

document.getElementById('Capitalize').onclick = function () {
    let convertCapitalize = '<span style= "text-transform = capitalize"; >' + orignalCities + '</span>'
    document.getElementById('output').innerHTML = convertCapitalize
}

// convert lowerlize

document.getElementById('lowercase').onclick = function () {
    let convertCapitalize1 = '<span style= "text-transform = uppercase"; >' + orignalCities + '</span>'
    document.getElementById('output').innerHTML = convertCapitalize1

}
