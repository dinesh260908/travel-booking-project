// ========== NAVIGATION MODULE ==========
function showSection(id) {
    var all = document.querySelectorAll(".section");
    for (var i=0; i<all.length; i++) all[i].classList.remove("active");
    document.getElementById(id).classList.add("active");

    if (id === "mybookings") loadMyBookings();
    if (id === "booking") {
        var user = getCurrentUser();
        if (user) {
            document.getElementById("name").value = user.name;
            document.getElementById("email").value = user.email;
            document.getElementById("phone").value = user.phone || "";
        }
    }
}