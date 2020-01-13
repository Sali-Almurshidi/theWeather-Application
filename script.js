setTimeout(function () {
    location.reload();
}, 1000 * 180);
let cityName;
let arrayInfo;
let url;
let currentDate = new Date(); // current date
let arrayCount = 0; // for the first day
let alertToday = {today: "", temp: "", weather: "", wind: ""};
let dayesWithDate = [];

function getData(name) {
    // ,be before &units is just for people in Belgem
    url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + name + '&units=metric&appid=a53ea4e1fc4352c9c1b0013c8741795c';
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            //arrayInfo = data;
            printData(data);
        });
}
function printThisDayWeather() {
    arrayCount = 0;
    var date = (arrayInfo.list[arrayCount].dt_txt).split(" "); // array date and hour
    var juseDate = date[0].split("-"); // array of just date
    console.log(arrayCount);
    let today = currentDate.getDate();
    document.getElementById("getThisDay").innerHTML = getDay(date[0]);
    document.getElementById("getThisDayDate").innerHTML = date[0] + " ";
    document.getElementById("getThisDayTemp").innerHTML = "The temp is: " + arrayInfo.list[arrayCount].main.temp;
    document.getElementById("getThisDayWeatherDescription").innerHTML = "The weather description is: " + arrayInfo.list[arrayCount].weather[0].description;
    document.getElementById("getThisDayWindSpeed").innerHTML = "The wind speed is: " + arrayInfo.list[arrayCount].wind.speed;
    // printToday();

    // function printToday() {

    while ((today == juseDate[2]) && (date[1] != "00:00:00")) {
        date = (arrayInfo.list[arrayCount].dt_txt).split(" "); // array date and hour
        juseDate = date[0].split("-");
        //console.log(date[0]); // date
        /*document.getElementById("getThisDay").innerHTML= getDay(date[0]);
        document.getElementById("getThisDayDate").innerHTML= date[0] + " " + date[1];
        document.getElementById("getThisDayTemp").innerHTML= arrayInfo.list[arrayCount].main.temp;
        document.getElementById("getThisDayWeatherDescription").innerHTML= arrayInfo.list[arrayCount].weather[0].description;
        document.getElementById("getThisDayWindSpeed").innerHTML= arrayInfo.list[arrayCount].wind.speed;*/
        //let dayName = date[0].split(":");
        //console.log(getDay(date[0]));
        let x = getDay(date[0]);
        //console.log(date[1]); // hours
        //let temp = arrayInfo.list[arrayCount].main.temp;
        //console.log(temp + " temp ");
        //console.log(arrayInfo.list[arrayCount].weather[0].description + " weather " + arrayInfo.list[arrayCount].weather[0].icon + " " + arrayInfo.list[arrayCount].wind.speed);

        //console.log(arrayCount);
        /*alertToday[arrayCount].today = date[0];
        alertToday[arrayCount].temp = arrayInfo.list[arrayCount].main.temp;
        alertToday[arrayCount].weather = arrayInfo.list[arrayCount].weather[0].description;
        alertToday[arrayCount].wind = arrayInfo.list[arrayCount].wind.speed;*/
        arrayCount++;
    }
    // }
    console.log("----------------------");
} // to print information for today
function printData(data) {
    arrayInfo = data;
    console.log("Hi");
    console.log(arrayInfo);
    printThisDayWeather();
    const today = new Date();
    const nextDay = new Date(today);
    var tomorrow = nextDay.getDate() + 1;
    var tM = nextDay.getMonth() + 1;
    var year = nextDay.getFullYear();
    dayesWithDate[0] = year + "-01-" + tomorrow + " 00:00:00";
    console.log(tM);
    var next2 = nextDay.getDate() + 2;
    console.log(next2);
    dayesWithDate[1] = year + "-01-" + next2 + " 00:00:00";
    var next3 = nextDay.getDate() + 3;
    //console.log(next3);
    dayesWithDate[2] = year + "-01-" + next3 + " 00:00:00";
    var next4 = nextDay.getDate() + 4;
    //console.log(next4);
    dayesWithDate[3] = year + "-01-" + next4 + " 00:00:00";

    getDaysData();
    /*console.log(arrayInfo.city.name); // the city name
    console.log(arrayInfo.city.country); // the country name
    // console.log(currentDate.getDate() + " day for today ");
    let date = (arrayInfo.list[arrayCount].dt_txt).split(" "); // array date and hour
    //  console.log(date);
    let juseDate = date[0].split("-");
    //console.log(juseDate);
    if (currentDate.getDate() == juseDate[2]) {
        printThisDayWeather();
    }//else if (currentDate.getDate() == (parseInt(juseDate[2])+1)){
    //printNextDay();
    // }*/

}

function getDay(dateString) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(dateString);
    var dayName = days[d.getDay()];
    return dayName;
} // function to get day



/*document.getElementById("dayNextHours").addEventListener("click", function () {
    //printToday();
    alert(alertToday);
});*/

/*function printSpecificDayWeather(day, month, formal) {
    let index;
    //console.log(arrayInfo.length);
    //console.log(currentDate.getDate());
    index = arrayInfo.list.findIndex(x => x.dt_txt === formal);
    console.log(index);
    // var dates = arrayInfo.list.map(item => item.dt_txt);
    //console.log(dates);
    let date = (arrayInfo.list[3].dt_txt).split(" "); // array date and hour
    let juseDate = date[0].split("-"); // array of just date
    while ((day == parseInt(juseDate[2])) && (month == parseInt(juseDate[1]))) {
        date = (arrayInfo.list[index].dt_txt).split(" "); // array date and hour
        juseDate = date[0].split("-");
        console.log(date[0]); // date
        //let dayName = date[0].split(":");
        console.log(getDay(date[0]));
        console.log(date[1]); // hours
        let temp = arrayInfo.list[index].main.temp;
        console.log(temp + " temp ");
        console.log(arrayInfo.list[index].weather[0].description + " weather " + arrayInfo.list[index].weather[0].icon + " " + arrayInfo.list[index].wind.speed);
        index++;
    }

    console.log("----------------------");
}*/

////////////
document.getElementById("callAPI").addEventListener("click", function () {
    cityName = document.getElementById("cityName").value;
    getData(cityName);

});

function getDaysData() {

    let index0 = arrayInfo.list.findIndex(x => x.dt_txt === dayesWithDate[0]);
    var date = (arrayInfo.list[index0].dt_txt).split(" "); // array date and hour
    var juseDate = date[0].split("-"); // array of just date
    document.getElementById("getNextDay").innerHTML = getDay(date[0]);
    document.getElementById("getNextDayDate").innerHTML = date[0] + " ";
    document.getElementById("getNextDayTemp").innerHTML = "The temp is: " + arrayInfo.list[index0].main.temp;
    document.getElementById("getNextDayWeatherDescription").innerHTML = "The weather description is: " + arrayInfo.list[index0].weather[0].description;
    document.getElementById("getNextDayWindSpeed").innerHTML = "The wind speed is: " + arrayInfo.list[index0].wind.speed;

    let index1 = arrayInfo.list.findIndex(x => x.dt_txt === dayesWithDate[1]);
    var date1 = (arrayInfo.list[index1].dt_txt).split(" "); // array date and hour
    var juseDate1 = date1[0].split("-"); // array of just date
    document.getElementById("get3Day").innerHTML = getDay(date1[0]);
    document.getElementById("get3DayDate").innerHTML = date1[0] + " ";
    document.getElementById("get3DayTemp").innerHTML = "The temp is: " + arrayInfo.list[index1].main.temp;
    document.getElementById("get3DayWeatherDescription").innerHTML = "The weather description is: " + arrayInfo.list[index1].weather[0].description;
    document.getElementById("get3DayWindSpeed").innerHTML = "The wind speed is: " + arrayInfo.list[index1].wind.speed;

    let index2 = arrayInfo.list.findIndex(x => x.dt_txt === dayesWithDate[2]);
    var date2 = (arrayInfo.list[index2].dt_txt).split(" "); // array date and hour
    var juseDate2 = date2[0].split("-"); // array of just date
    document.getElementById("get4Day").innerHTML = getDay(date2[0]);
    document.getElementById("get4DayDate").innerHTML = date2[0] + " ";
    document.getElementById("get4DayTemp").innerHTML = "The temp is: " + arrayInfo.list[index2].main.temp;
    document.getElementById("get4DayWeatherDescription").innerHTML = "The weather description is: " + arrayInfo.list[index2].weather[0].description;
    document.getElementById("get4DayWindSpeed").innerHTML = "The wind speed is: " + arrayInfo.list[index2].wind.speed;

    let index3 = arrayInfo.list.findIndex(x => x.dt_txt === dayesWithDate[3]);
    var date3 = (arrayInfo.list[index3].dt_txt).split(" "); // array date and hour
    var juseDate3 = date3[0].split("-"); // array of just date
    document.getElementById("get5Day").innerHTML = getDay(date3[0]);
    document.getElementById("get5DayDate").innerHTML = date3[0] + " ";
    document.getElementById("get5DayTemp").innerHTML = "The temp is: " + arrayInfo.list[index3].main.temp;
    document.getElementById("get5DayWeatherDescription").innerHTML = "The weather description is: " + arrayInfo.list[index3].weather[0].description;
    document.getElementById("get5DayWindSpeed").innerHTML = "The wind speed is: " + arrayInfo.list[index3].wind.speed;
}

/*document.getElementById("callDay1").addEventListener("click", function () {
    printThisDayWeather();
});*/

/*document.getElementById("callDay2").addEventListener("click", function () {
    var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    var day = currentDate.getDate();
    console.log(day);
    var month = currentDate.getMonth() + 1;
    console.log(day + " " + month);
    let formal = "2020-01-14 00:00:00";
    console.log(currentDate);
    printSpecificDayWeather(day, month, formal);
});*/

