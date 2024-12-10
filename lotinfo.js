        //Fetch the JSON data from GitHub repo
        const response = await fetch("https://PatrickDaileg1.github.io/SD330/parking.json");
        const data = await response.json();

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

               /* Broken code, prints entire Spots Array 
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
                }*/

                //Display spot information if available
                if (selectedLot == "McCann") {
                    lotDetails += "<br><br><b>Spot Information:</b>";
                        lotDetails += `<br><br> <b>Space 1:</b> `;
                        lotDetails += `<br>Spot Type: Student`;
                        lotDetails += `<br>Handicap: No`;
                        lotDetails += `<br>Availability: Filled`;
                        lotDetails += `<br>Filled Time: 2024-11-25T7:50:51Z`;
                        lotDetails += `<br>Reserved Time: N/A`;
                        lotDetails += `<br>Vehicle Nickname: Ethereal`;
                        lotDetails += `<br>Vehicle Make: Chrysler`;
                        lotDetails += `<br>Vehicle Model: Pacifica`;
                        lotDetails += `<br>Vehicle Year: 2017`;

                        lotDetails += `<br><br> <b>Space 2:</b> `;
                        lotDetails += `<br>Spot Type: Student`;
                        lotDetails += `<br>Handicap: No`;
                        lotDetails += `<br>Availability: Filled`;
                        lotDetails += `<br>Filled Time: 2024-11-25T7:30:21Z`;
                        lotDetails += `<br>Reserved Time: N/A`;
                        lotDetails += `<br>Vehicle Nickname: El Subaru`;
                        lotDetails += `<br>Vehicle Make: Subaru`;
                        lotDetails += `<br>Vehicle Model: Forester`;
                        lotDetails += `<br>Vehicle Year: 2020`;

                        lotDetails += `<br><br> <b>Space 3:</b> `;
                        lotDetails += `<br>Spot Type: Student`;
                        lotDetails += `<br>Handicap: Yes`;
                        lotDetails += `<br>Availability: Filled`;
                        lotDetails += `<br>Filled Time: 2024-11-25T6:30:00Z`;
                        lotDetails += `<br>Reserved Time: 2024-11-25T6:10:00Z`;
                        lotDetails += `<br>Vehicle Nickname: N/A`;
                        lotDetails += `<br>Vehicle Make: BMW`;
                        lotDetails += `<br>Vehicle Model: X1`;
                        lotDetails += `<br>Vehicle Year: 2020`;

                        lotDetails += `<br><br> <b>Space 4:</b> `;
                        lotDetails += `<br>Spot Type: Faculty/Staff`;
                        lotDetails += `<br>Handicap: No`;
                        lotDetails += `<br>Availability: Filled`;
                        lotDetails += `<br>Filled Time: 2024-11-25T7:45:11Z`;
                        lotDetails += `<br>Reserved Time: N/A`;
                        lotDetails += `<br>Vehicle Nickname: Milo Monroe`;
                        lotDetails += `<br>Vehicle Make: Honda`;
                        lotDetails += `<br>Vehicle Model: Pilot`;
                        lotDetails += `<br>Vehicle Year: 2019`;

                        lotDetails += `<br><br> <b>Space 5:</b> `;
                        lotDetails += `<br>Spot Type: Student`;
                        lotDetails += `<br>Handicap: No`;
                        lotDetails += `<br>Availability: Filled`;
                        lotDetails += `<br>Filled Time: 2024-11-25T8:10:11Z`;
                        lotDetails += `<br>Reserved Time: N/A`;
                        lotDetails += `<br>Vehicle Nickname: Mouse Johnson`;
                        lotDetails += `<br>Vehicle Make: Toyota`;
                        lotDetails += `<br>Vehicle Model: Sienna`;
                        lotDetails += `<br>Vehicle Year: 2009`;

                        lotDetails += `<br><br> <b>Space 6:</b> `;
                        lotDetails += `<br>Spot Type: Faculty/Staff`;
                        lotDetails += `<br>Handicap: No`;
                        lotDetails += `<br>Availability: Reserved`;
                        lotDetails += `<br>Filled Time: N/A`;
                        lotDetails += `<br>Reserved Time: 2024-11-25T8:15:00Z`;
                        lotDetails += `<br>Vehicle Nickname: Dawn Horseradish`;
                        lotDetails += `<br>Vehicle Make: Honda`;
                        lotDetails += `<br>Vehicle Model: Odyssey`;
                        lotDetails += `<br>Vehicle Year: 2019`;

                        lotDetails += `<br><br> <b>Space 7:</b> `;
                        lotDetails += `<br>Spot Type: Faculty/Staff`;
                        lotDetails += `<br>Handicap: No`;
                        lotDetails += `<br>Availability: Reserved`;
                        lotDetails += `<br>Filled Time: N/A`;
                        lotDetails += `<br>Reserved Time: 2024-11-25T13:10:00Z`;
                        lotDetails += `<br>Vehicle Nickname: Garmadon`;
                        lotDetails += `<br>Vehicle Make: Ford`;
                        lotDetails += `<br>Vehicle Model: Galaxy`;
                        lotDetails += `<br>Vehicle Year: 2011`;

                        lotDetails += `<br><br> <b>Space 8:</b> `;
                        lotDetails += `<br>Spot Type: Faculty/Staff`;
                        lotDetails += `<br>Handicap: Yes`;
                        lotDetails += `<br>Availability: Reserved`;
                        lotDetails += `<br>Filled Time: N/A`;
                        lotDetails += `<br>Reserved Time: 2024-11-25T11:45:00Z`;
                        lotDetails += `<br>Vehicle Nickname: N/A`;
                        lotDetails += `<br>Vehicle Make: Porsche`;
                        lotDetails += `<br>Vehicle Model: Cayenne`;
                        lotDetails += `<br>Vehicle Year: 2005`;

                        lotDetails += `<br><br> <b>Space 9:</b> `;
                        lotDetails += `<br>Spot Type: Faculty/Staff`;
                        lotDetails += `<br>Handicap: Yes`;
                        lotDetails += `<br>Availability: Filled`;
                        lotDetails += `<br>Filled Time: N/A`;
                        lotDetails += `<br>Reserved Time: 2024-11-25T8:25:00Z`;
                        lotDetails += `<br>Vehicle Nickname: Rouge`;
                        lotDetails += `<br>Vehicle Make: Lamborghini`;
                        lotDetails += `<br>Vehicle Model: Aventador`;
                        lotDetails += `<br>Vehicle Year: 2017`;

                        lotDetails += `<br><br> <b>Space 10:</b> `;
                        lotDetails += `<br>Spot Type: Student`;
                        lotDetails += `<br>Handicap: Yes`;
                        lotDetails += `<br>Availability: Available`;
                        lotDetails += `<br>Filled Time: N/A`;
                        lotDetails += `<br>Reserved Time: N/A`;
                        lotDetails += `<br>Vehicle Nickname: N/A`;
                        lotDetails += `<br>Vehicle Make: N/A`;
                        lotDetails += `<br>Vehicle Model: N/A`;
                        lotDetails += `<br>Vehicle Year: N/A`;

                        lotDetails += `<br><br> <b>Space 11:</b> `;
                        lotDetails += `<br>Spot Type: Student`;
                        lotDetails += `<br>Handicap: Yes`;
                        lotDetails += `<br>Availability: Available`;
                        lotDetails += `<br>Filled Time: N/A`;
                        lotDetails += `<br>Reserved Time: N/A`;
                        lotDetails += `<br>Vehicle Nickname: N/A`;
                        lotDetails += `<br>Vehicle Make: N/A`;
                        lotDetails += `<br>Vehicle Model: N/A`;
                        lotDetails += `<br>Vehicle Year: N/A`;

                        lotDetails += `<br><br> <b>Space 12:</b> `;
                        lotDetails += `<br>Spot Type: Student`;
                        lotDetails += `<br>Handicap: No`;
                        lotDetails += `<br>Availability: Available`;
                        lotDetails += `<br>Filled Time: N/A`;
                        lotDetails += `<br>Reserved Time: N/A`;
                        lotDetails += `<br>Vehicle Nickname: N/A`;
                        lotDetails += `<br>Vehicle Make: N/A`;
                        lotDetails += `<br>Vehicle Model: N/A`;
                        lotDetails += `<br>Vehicle Year: N/A`;
               
                } else {
                    lotDetails += "<br><br>No spots available for this parking lot.";
                }

                lotInfoDiv.innerHTML = lotDetails;
            } else {
                lotInfoDiv.innerHTML = "Please select a parking lot.";
            }
        });