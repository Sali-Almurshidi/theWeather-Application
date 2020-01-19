setTimeout(function () {
    location.reload();
}, 1000 * 180);

function getData(name) {
    // (,be) before &units is just for people in Belgium
    let url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + name + '&units=metric&appid=a53ea4e1fc4352c9c1b0013c8741795c';
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(function (data) {
            printData(data);
        });
}// fetch function

function printThisDayWeather(arrayInfo) {
    let arrayCount = 0; // for the first day
    var date = (arrayInfo.list[arrayCount].dt_txt).split(" "); // array date and hour
    //var juseDate = date[0].split("-"); // array of just date
    let currentDate = new Date(); // current date
    //let today = currentDate.getDate();
    document.getElementById("getThisDay").innerHTML = getDay(date[0]);
    document.getElementById("getThisDayDate").innerHTML = date[0] + " ";
    document.getElementById("getThisDayTemp").innerHTML = "The temp is: " + arrayInfo.list[arrayCount].main.temp;
    document.getElementById("getThisDayWeatherDescription").innerHTML = "The weather description is: " + arrayInfo.list[arrayCount].weather[0].description;
    document.getElementById("getThisDayWindSpeed").innerHTML = "The wind speed is: " + arrayInfo.list[arrayCount].wind.speed;

} // to print information for today

function printData(arrayInfo) {
    printThisDayWeather(arrayInfo); // to print this day information
    let today;
    let nextDays;
    let nextMonth;
    let nextYear;
    let daysWithDate = [];
    // get the date for the next 5 days
    for (i = 1; i <= 5; i++) {
        today = new Date();
        today.setDate(today.getDate() + i);
        nextDays = dayStyle(today.getDate());
        nextMonth = monthStyle(today.getMonth() + 1);
        nextYear = today.getFullYear();
        daysWithDate[(i - 1)] = nextYear + "-" + nextMonth + "-" + nextDays + " 00:00:00";
    }
    getDaysData(arrayInfo, daysWithDate); //call function to get days information
} // to make sure  arrayInfo not empty

function monthStyle(m) {
    if (m < 10) {
        m = "0" + m;
        return m;
    } else {
        return m;
    }
}

function dayStyle(d) {
    if (d < 10) {
        d = "0" + d;
        return d;
    } else {
        return d;
    }
}

function getDay(dateString) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date(dateString);
    let dayName = days[d.getDay()];
    return dayName;
} // function to get day

async function getDaysData(arrayInfo, dayesWithDate) {
    let index;
    let dateAndHour = [];

    // for loop for four days
    for (i = 0; i < 4; i++) {

        index = await arrayInfo.list.findIndex(x => x.dt_txt == dayesWithDate[i]);
        dateAndHour = (arrayInfo.list[index].dt_txt).split(" ");

        // div 1
        let displayWeatherDiv = document.createElement("div");
        displayWeatherDiv.setAttribute("class", "col-md-3 , col-sm-6 , bg-dark ");

        // div 2
        let formGroupDiv = document.createElement("div");
        formGroupDiv.setAttribute("class", "form-group , p-3 , rounded");

        // next title
        let titleNext = document.createElement("h3");
        titleNext.setAttribute("class", "text-warning");
        titleNext.innerHTML = getDay(dateAndHour[0]);

        // div 3
        let informationDiv = document.createElement("div");
        informationDiv.setAttribute("class", "form-group , p-3 , rounded , text-white");

        // h6 get Day Date
        let getDayDate = document.createElement("h6");
        getDayDate.innerHTML = dateAndHour[0] + " ";

        // h6 get Day Temp
        let getDayTemp = document.createElement("h6");
        getDayTemp.innerHTML = "The temp is: " + arrayInfo.list[i].main.temp;

        // h6 get Day WeatherDescription
        let getDayWeatherDescription = document.createElement("h6");
        getDayWeatherDescription.innerHTML = "The weather description is: " + arrayInfo.list[i].weather[0].description;

        // h6 get Day Wind Speed
        let getDayWindSpeed = document.createElement("h6");
        getDayWindSpeed.innerHTML = "The wind speed is: " + arrayInfo.list[i].wind.speed;

        // make a tree
        displayWeatherDiv.appendChild(formGroupDiv);
        formGroupDiv.appendChild(titleNext);
        formGroupDiv.appendChild(informationDiv);
        informationDiv.appendChild(getDayDate);
        informationDiv.appendChild(getDayTemp);
        informationDiv.appendChild(getDayWeatherDescription);
        informationDiv.appendChild(getDayWindSpeed);

        let weatherForNextDays = document.getElementById("weatherForNextDays");
        weatherForNextDays.appendChild(displayWeatherDiv);

    }// loop close

}// function to print days information

document.getElementById("callAPI").addEventListener("click", function () {
    let cityName = document.getElementById("cityName").value;
    getData(cityName);
});// add event listener for the button