// ========== SEARCH & RESULTS MODULE ==========
var selectedTrip = {};

function showResults() {
    var type = document.getElementById("type").value;
    var from = document.getElementById("from").value || "Kochi";
    var to = document.getElementById("to").value || "Bangalore";
    var date = document.getElementById("date").value || "2025-10-20";

    var list = [];
    if (type === "flight") {
        list = [
            {name:"IndiGo 6E-6123", details:"1h 25m | Non-stop", price:"₹ 3,899"},
            {name:"Air India AI-567", details:"1h 40m | Non-stop", price:"₹ 4,450"},
            {name:"SpiceJet SG-812", details:"1h 35m | Non-stop", price:"₹ 3,650"},
            {name:"Vistara UK-901", details:"1h 30m | Non-stop", price:"₹ 5,200"}
        ];
    } else if (type === "bus") {
        list = [
            {name:"KSRTC Super Deluxe", details:"9h 30m | AC Sleeper", price:"₹ 850"},
            {name:"Kallada Travels", details:"9h 00m | Volvo", price:"₹ 1,150"},
            {name:"SRS Travels", details:"10h 15m | Non-AC", price:"₹ 650"},
            {name:"Orange Tours", details:"8h 45m | AC Sleeper", price:"₹ 1,050"}
        ];
    } else {
        list = [
            {name:"Mangala Lakshadweep Exp", details:"11h 20m | 2A 3A SL", price:"₹ 1,245"},
            {name:"Kerala Sampark Kranti", details:"10h 50m | 1A 2A 3A", price:"₹ 1,890"},
            {name:"Kochuveli Express", details:"12h 10m | 3A SL", price:"₹ 780"},
            {name:"Nizamuddin Express", details:"11h 45m | 2A 3A SL", price:"₹ 1,420"}
        ];
    }

    var html = "";
    for (var i=0; i<list.length; i++) {
        var item = list[i];
        html += '<div class="result-card">' +
            '<div>' +
                '<div class="type-badge">' + type.toUpperCase() + '</div>' +
                '<h3 style="color:#0b3d91;margin:4px 0;">' + item.name + '</h3>' +
                '<p style="font-size:14px;color:#555;">' + from + ' → ' + to + ' | ' + date + ' | ' + item.details + '</p>' +
            '</div>' +
            '<div style="text-align:right;">' +
                '<div class="price">' + item.price + '</div>' +
                '<button class="btn" onclick="bookThis(\'' + type + '\',\'' + item.name + '\',\'' + from + '\',\'' + to + '\',\'' + date + '\',\'' + item.price + '\')">Book</button>' +
            '</div>' +
        '</div>';
    }

    document.getElementById("resultList").innerHTML = html;
    showSection("results");
}

function bookThis(type, name, from, to, date, price) {
    selectedTrip = { type:type, name:name, from:from, to:to, date:date, price:price };
    showSection("booking");
}