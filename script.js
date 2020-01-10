/*(async () => {
    const rawResponse = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=524', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({a: 1, b: 'Textual content'})
    });
    const content = await rawResponse.json();

    console.log(content);
})();*/
let cityName = '';
let url ;
/*https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22
fetch("https://api.openweathermap.org/data/2.5/weather?q="+ cityName+"&units=metric&appid=6bc8f3ac71975b0d3bdc2b870d406851", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "SIGN-UP-FOR-KEY"
    }
})
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })*/


function getData (name){
    // ,be before &units is just for people in Belgem
    url = 'https://api.openweathermap.org/data/2.5/forecast?q='+name+'&units=metric&appid=a53ea4e1fc4352c9c1b0013c8741795c' ;
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });


}

///////////////////

//var data = null;

/*
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});

xhr.open("GET", "https://community-open-weather-map.p.rapidapi.com/forecast?q=san%20francisco%252Cus");
xhr.setRequestHeader("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "SIGN-UP-FOR-KEY");

xhr.send(data);
*/

////////////
document.getElementById("callAPI").addEventListener("click", function () {
    cityName = document.getElementById("cityName").value;
    getData(cityName);
    //console.log(cityName);

});