//allows us to clear the time formatting if necessary
let timeFormat = null;

// Function to get 12-hour time
function getTime() {
    let time = document.getElementById("currentTime");

    //Clears the time formatting if the 24 hour option was pressed prior
    if (timeFormat) {
        clearInterval(timeFormat);
    }

    //Formats the time as the 12 hour (AM/PM) format
    timeFormat = setInterval(() => {
        let d = new Date();
        time.innerHTML = d.toLocaleTimeString();
    }, 1000);
}

// Function to get 24-hour (military) time
function getMilitaryTime() {
    let time = document.getElementById("currentTime");

    //Clears the time formatting if the 12 hour option was pressed prior
    if (timeFormat) {
        clearInterval(timeFormat);
    }

    //Formats the time as the 24 hour (military) format
    timeFormat = setInterval(() => {
        let d = new Date();
        time.innerHTML = d.toLocaleTimeString('en-GB');
    }, 1000);
}

    //This function checks the temperature inside the fridge.
    function getTemperature(){
        document.getElementById("currentTemperature").innerHTML = 32;
    }

    //This function allows you to change the temperature mode to Celsius.
    function changeToCelsius() {
        let temperatureElement = document.getElementById("currentTemperature");
        let temperature = parseFloat(temperatureElement.textContent);
        temperatureElement.innerHTML = temperature + "\u00B0C";
    }

    //This function allows you to change the temperature mode to Fahrenheit.
    function changeToFahrenheit() {
        let temperatureElement = document.getElementById("currentTemperature");
        let temperature = parseFloat(temperatureElement.textContent);
        temperatureElement.innerHTML = temperature + "\u00B0F";
    }

    //This function allows you to increase the temperature by 1 degree.
    function increaseTemperature(){
        var result = parseInt(document.getElementById("currentTemperature").innerHTML) + 1;
        document.getElementById("currentTemperature").innerHTML = result;  
    }

    //This function allows you to decrease the temperature by 1 degree.
    function decreaseTemperature(){
        var result = parseInt(document.getElementById("currentTemperature").innerHTML) - 1;
        document.getElementById("currentTemperature").innerHTML = result;    
    }

    //This function takes you back to the home menu.
    function goHome(){
        document.getElementById("fridgeImage").src = "https://i.sstatic.net/b4Qi8.png"; 
    }

    //This function opens the fridge to reveal what's inside.
    function viewFridge(){
        document.getElementById("fridgeImage").src = "https://thumb.spokesman.com/GGl6mld0n3ge3QBhWE-J_7Wmpd0=/1200x0/media.spokesman.com/photos/2024/08/28/66ce7d296b19b.hires.jpg"; 
    }

    //This function opens up the web browser.
    function openBrowser(){
    document.getElementById("fridgeImage").src = "https://embed-ssl.wistia.com/deliveries/94fc6ada116cf7d484a0a0c1accbd4a69c61bb1c.webp?image_crop_resized=1280x1133";
    }

    //This function gets the current weather.
    function getWeather(){
        document.getElementById("fridgeImage").src = "https://fox12weather.wordpress.com/wp-content/uploads/2019/11/iphone-snow-jpg.jpg";       
    }

    //This function opens Netflix.
    function watchNetflix(){
        document.getElementById("fridgeImage").src = "https://hard-drive.net/wp-content/uploads/2021/10/netflix-titles.jpg-1.webp";       
    }
    //This function sets a timer for one minute, and plays a sound when the timer goes off.
    function fridgeTimer(){
        var ding = document.getElementById("timerAudio"); 
        setTimeout(timer, 60000);
        function timer(){
            document.getElementById("fridgeImage").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0RB_Ql2pAQDxkzfNtWSU8HnKaTuquxDa72w&s";
            ding.play(); 
        }
    }

    //This function turns the screen on or off.
    function toggleScreen(){
        var smartScreen = document.getElementById("screenDiv");
        var vocal = document.getElementById("startupAudio");
        var nyehh = document.getElementById("shutdownAudio");
            if (smartScreen.style.display === "none") {
                smartScreen.style.display = "block";
                vocal.play();
            } else {
                smartScreen.style.display = "none";
                nyehh.play();
                
        }
    }

    //This function hides or unhides the Music Player
    function toggleMusic(){
        var smartScreen = document.getElementById("musicDiv");
            if (smartScreen.style.display === "none") {
                smartScreen.style.display = "block";
            } else {
                smartScreen.style.display = "none";
                
        }
    }

    //This function hides or unhides the grucery list
    function getList(){
        var smartScreen = document.getElementById("listDiv");
            if (smartScreen.style.display === "block") {
                smartScreen.style.display = "none";
            } else {
                smartScreen.style.display = "block";
                
        }
    }

    //This function hides or unhides the clock
    function toggleTime(){
        var smartScreen = document.getElementById("clockDiv");
            if (smartScreen.style.display === "block") {
                smartScreen.style.display = "none";
            } else {
                smartScreen.style.display = "block";
                
        }
    }

//This function allows the user to add a new item to their grocery list
function addItem() {
    const node = document.createElement("li");
    const newItemName = document.getElementById("newitem").value;
    const textnode = document.createTextNode(newItemName);
    node.appendChild(textnode);
    document.getElementById("grocery").appendChild(node);
}