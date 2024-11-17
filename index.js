function Filelist() {

    var htmlString = "";

    // this creates JS object 'data' with a list of files  
    (async () => {
        const response = await fetch("https://api.github.com/repos/PatrickDaileg1/SD330/contents/");
        const data = await response.json();
        htmlString += "<br><br><br><br><br><br>";

        // loop through the list of files, set "file" to each file name
        for (let file of data) {
            fname = file.name;
            fpath = "https://PatrickDaileg1.github.io/SD330/" + fname;

            htmlString += "<p>" + fname + "<br>";
            htmlString += `<p> <a href="${fpath}" target="_blank">` + fpath + "</a>" + "</p>";

        }
            htmlString += "<br>"
        

        document.getElementById('files').innerHTML = htmlString;
    })()

}
function placeholderText(){
    alert("Hello World, I'm just a proof of concept");
}

//This function gets the time from the local machine. 
function getTime(){
    let time = document.getElementById("timediv");

    setInterval(() => {
        let d = new Date();
        time.innerHTML = d.toLocaleTimeString();
        }, 1000)
}