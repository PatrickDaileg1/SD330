var htmlString = ""

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