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


// --------------------city------------------------------------------------------
document.getElementById('city').onclick = function () {
    document.getElementById('output').innerHTML = "";

    for (let i = 0; i < city.length; i++) {
        let num = i + 1 ;
        document.getElementById('output').innerHTML += num + ')' + city[i] + '<br>';
        
    }
}
 