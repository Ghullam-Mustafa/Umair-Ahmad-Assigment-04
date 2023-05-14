// erase data value
document.getElementById('erase').onclick = function () {
    document.getElementById('data').value = "";
}

// ----------------cities-----------------------

let city = ["Faisalabad","Multan","Jhung"]

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

    for (let i = 0; i < city.length; i++) {
        let num = i + 1 ;
        document.getElementById('output').innerHTML += num + ')' + city[i] + '<br>';
        
    }
}
 
// -----------------------------addCityInList----------------------------------------------

document.getElementById('addCityInList').onclick = function () {
    document.getElementById('output').innerHTML = "";
    let add = document.getElementById('data').value;
    city.push(add)
    
    // document.getElementById('output').innerHTML = city
    if (add.length  < 3) {
        alert("Please Enter correctly name");
        return;
    }
    let firstName = add.charAt(0).toLocaleUpperCase();
    let secondName = add.slice(1).toLocaleLowerCase();
    // console.log(firstName);
    // console.log(secondName);
    // console.log(firstName+secondName);
    let newName = firstName + secondName ;

    for (let index = 0; index < city.length; index++) {
       if (newName == "Faisalabad") {
        document.getElementById('output').innerHTML = "Faisalabad is already in your list"
       }
        
    }
}