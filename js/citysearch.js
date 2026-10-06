// ========== CITY SEARCH MODULE ==========
var cities = ["Kochi","Thiruvananthapuram","Kozhikode","Thrissur","Kannur","Bangalore","Chennai","Mumbai","Delhi","Hyderabad","Pune","Kolkata","Ahmedabad","Jaipur","Goa","Mangalore","Coimbatore","Madurai","Mysore","Alappuzha","Kollam","Palakkad","Kottayam","Visakhapatnam","Lucknow","Patna","Guwahati","Chandigarh"];

function showSuggestions(field) {
    var input = document.getElementById(field);
    var box = document.getElementById(field + "Suggestions");
    var val = input.value.toLowerCase();
    if (val.length < 1) { box.style.display = "none"; return; }

    var html = "";
    for (var i=0; i<cities.length; i++) {
        if (cities[i].toLowerCase().startsWith(val)) {
            html += "<div onclick=\"selectCity('" + field + "','" + cities[i] + "')\">" + cities[i] + "</div>";
        }
    }
    box.innerHTML = html;
    box.style.display = html ? "block" : "none";
}

function selectCity(field, city) {
    document.getElementById(field).value = city;
    document.getElementById(field + "Suggestions").style.display = "none";
}