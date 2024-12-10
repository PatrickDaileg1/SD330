//Shows placeholder text when the buttons are clicked.
function placeholderText() {
    alert('This function does not work yet');
}
//Calls the 404 page if this button is pressed
function fourOhFour() {
    location.replace("404.html");
}

//Goes to homepage if this button is pressed
function goHome() {
    location.replace("parking.html");
}
//Goes to homepage if this button is pressed
function youAreHome() {
    alert('You are at the homepage');
}

//Brings up the lot information when the button is pressed.
function viewLotInfo() {
    location.replace("lotinfo.html");
}

//LOTS JS
    var htmlString = ""
    //Fetch the JSON data from GitHub repo
    const response = await fetch("https://PatrickDaileg1.github.io/SD330/parking.json")
    const data = await response.json();

    let keys = Object.keys(data["parkingLots"]);
    for (let i = 1; i < keys.length; i++){
            let thiskey = keys[i];
            htmlString += "<b><br> Lot #" + i + " : " + thiskey + "</b>";
            htmlString += "<br><br>Comments: " + data['parkingLots'][thiskey]['comments']
            htmlString += "<br><br>Total Amount of Spaces in Lot: " + data['parkingLots'][thiskey]['totalSpaces']
            htmlString += "<br><br>Renovation Status: " + data['parkingLots'][thiskey]['renovationStatus']
            htmlString += "<br><br>Does The Lot Host Events? " + data['parkingLots'][thiskey]['eventStatus']
            htmlString += "<br><br>Are Visitors Allowed? " + data['parkingLots'][thiskey]['visitorsAllowed']
            htmlString += "<br><br><button type='button' onclick='viewLotInfo()'>View Lot Information</button><br><br>"
    }
    document.getElementById('info').innerHTML += htmlString;

//LOTINFO JS


//Build dropdown menu for selecting parking lots
let htmlString = '<hr>';
htmlString += '<b>Select a Parking Lot:</b><br>';
htmlString += '<select id="parkingLotDropdown" name="parkingLots">';
htmlString += '<option value="">-- Select a Parking Lot --</option>'; // Default placeholder
const parkingLots = Object.keys(data["parkingLots"]);
for (let i = 0; i < parkingLots.length; i++) {
    htmlString += `<option value="${parkingLots[i]}">${parkingLots[i]}</option>`;
}
htmlString += '</select>';
htmlString += '<br><br><button id="submitButton">Submit</button><br><br>';

//Inject dropdown into the page
document.getElementById("info").innerHTML = htmlString;

//Add event listener for the Submit button
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function () {
    const dropdown = document.getElementById("parkingLotDropdown");
    const selectedLot = dropdown.value;
    const lotInfoDiv = document.getElementById("lotInfo");

    //Clear previous lot information
    lotInfoDiv.innerHTML = "";

    //Display selected lot information
    if (selectedLot) {
        const lotInfo = data["parkingLots"][selectedLot];
        let lotDetails = `<b>Lot: ${selectedLot}</b>`;
        lotDetails += `<br>Comments: ${lotInfo.comments}`;
        lotDetails += `<br>Renovation Status: ${lotInfo.renovationStatus}`;
        lotDetails += `<br>Event Status: ${lotInfo.eventStatus}`;
        lotDetails += `<br>Visitors Allowed: ${lotInfo.visitorsAllowed}`;
        lotDetails += `<br>Total Spaces: ${lotInfo.totalSpaces}`;

        //Display spot information if available
        if (lotInfo.spots && Object.keys(lotInfo.spots).length) {
            lotDetails += "<br><br><b>Spot Information:</b>";
            lotInfo.spots.forEach((spot, spotIndex) => {
                lotDetails += `<br> Spot ${spotIndex + 1}: ${JSON.stringify(spot)}`;
                lotDetails += `<br>Spot Type: ${spot.spotType || "N/A"}`;
                lotDetails += `<br>Handicap: ${spot.handicap || "N/A"}`;
                lotDetails += `<br>Filled Time: ${spot.filledTime || "N/A"}`;
                lotDetails += `<br>Reserved Time: ${spot.reservedTime || "N/A"}`;
                lotDetails += `<br>Vehicle Nickname: ${spot.vehNickname || "N/A"}`;
                lotDetails += `<br>Vehicle Make: ${spot.vehMake || "N/A"}`;
                lotDetails += `<br>Vehicle Model: ${spot.vehModel || "N/A"}`;
                lotDetails += `<br>Vehicle Year: ${spot.vehYear || "N/A"}`;
                //console.log(spot);

            });
        } else {
            lotDetails += "<br><br>No spots available for this parking lot.";
        }

        lotInfoDiv.innerHTML = lotDetails;
    } else {
        lotInfoDiv.innerHTML = "Please select a parking lot.";
    }
});
