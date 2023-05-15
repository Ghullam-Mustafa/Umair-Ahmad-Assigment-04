// erase data value
document.getElementById('erase').onclick = function () {
    document.getElementById('data').value = "";
}

// ----------------cities-----------------------

let citys = ["Faisalabad","Multan","Jhung"]

//  output erase 
document.getElementById('Clean').onclick = function () {
    document.getElementById('output').innerHTML = "";
}

// orignal cities
let orignalCities = "I love pakistan <br> I love faisalabad <br> I love motherland"


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
    // let convertCapitalize = '<span style= "text-transform = capitalize"; >' + orignalCities + '</span>'
    document.getElementById('output').style.textTransform = "capitalize"
    document.getElementById('output').innerHTML = orignalCities
}

// convert lowerlize



// ---------------Better-Formatting-------------------
document.getElementById("BetterFormatting").onclick = function () {
    let text = document.getElementById('data').value;

    if (!text) {
       alert("Enter a value") 
       return;
    }

    document.getElementById('output').style.textTransform = 'capitalize';
    document.getElementById('output').innerHTML = text;
}


// ------------------------------city------------------------------------------------------
document.getElementById('city').onclick = function () {
    document.getElementById('output').innerHTML = "";

    for (let i = 0; i < citys.length; i++) {
        let num = i + 1 ;
        
        document.getElementById('output').innerHTML += num + ')' + citys[i] + '<br>';
        
    }
}
 
// -----------------------------addCityInList----------------------------------------------

// document.getElementById('addCityInList').onclick = function () {
//     document.getElementById('output').innerHTML = "";
//     let add = document.getElementById('data').value;
//     // city.push(add)
    
//     // document.getElementById('output').innerHTML = city
//     if (add.length  < 3) {
//         alert("Please Enter correctly name");
//         return;
//     }
//     let firstName = add.charAt(0).toLocaleUpperCase();
//     let secondName = add.slice(1).toLocaleLowerCase();
//     // console.log(firstName);
//     // console.log(secondName);
//     // console.log(firstName+secondName);
//     let newName = firstName + secondName ;
//     console.log(newName);
//     let cityFond = false

//     for (let i = 0; i < city.length; i++) {
//        if (newName[i] === "Faisalabad") {
//         cityFond = true
//         document.getElementById('output').innerHTML = "Faisalabad is already in your list";
//        }
        
//     }

//     if (cityFond === false) {
        
//         city.push(newName);

//         document.getElementById('output').innerHTML = city
//     }
// }


document.getElementById('addCityInList').onclick = function () {
    document.getElementById('output').innerHTML = "";
    let City = document.getElementById('data').value;
    if (City.length < 3) {
        alert("Please enter valid number");
        return;
    }
    let cityFirstLetter = City.charAt(0).toLocaleUpperCase();
    let cityAllLetters = City.slice(1).toLocaleLowerCase();
    let cityWordInCapitalize = cityFirstLetter + cityAllLetters;
    console.log(cityWordInCapitalize);

    let cityFound = false
    for (let i = 0; i < citys.length; i++) {
        if (citys[i] == cityWordInCapitalize ) {
            cityFound = true
            let html = '<span style = "color: red; font-size: 20px;">'+cityWordInCapitalize +'</span>' +" is already add"
            document.getElementById('output').innerHTML = html
        }
    }

    if (cityFound === false) {
        citys.push(cityWordInCapitalize);
        let html = '<span style = "color: green; font-size: 20px;">'+cityWordInCapitalize +'</span>' +" is successfully add"
        document.getElementById('output').innerHTML = html
    }

}
