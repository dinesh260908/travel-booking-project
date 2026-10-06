// ========== BOOKING & PAYMENT MODULE ==========
function goToPayment() {
    if (!getCurrentUser()) {
        alert("Please login first to continue booking");
        showSection("login");
        return;
    }
    showSection("payment");
}

function selectPayment(el, type) {
    var opts = document.querySelectorAll(".pay-option");
    for (var i=0; i<opts.length; i++) opts[i].classList.remove("active");
    el.classList.add("active");

    document.getElementById("upiBox").style.display = (type==="upi") ? "block" : "none";
    document.getElementById("cardBox").style.display = (type==="card") ? "block" : "none";
    document.getElementById("netBox").style.display = (type==="net") ? "block" : "none";
}

function confirmBooking() {
    var user = getCurrentUser();
    if (!user) {
        alert("Please login");
        return;
    }

    var name = document.getElementById("name").value || user.name;
    var email = document.getElementById("email").value || user.email;
    var seats = document.getElementById("seats").value;
    var bookingId = "KL" + Math.floor(100000 + Math.random()*900000);

    var booking = {
        id: bookingId,
        type: selectedTrip.type,
        name: selectedTrip.name,
        from: selectedTrip.from,
        to: selectedTrip.to,
        date: selectedTrip.date,
        price: selectedTrip.price,
        seats: seats,
        passenger: name,
        bookedOn: new Date().toLocaleString()
    };

    var users = getUsers();
    for (var i=0; i<users.length; i++) {
        if (users[i].email === user.email) {
            if (!users[i].bookings) users[i].bookings = [];
            users[i].bookings.unshift(booking);
            setCurrentUser(users[i]);
            break;
        }
    }
    saveUsers(users);

    document.getElementById("confirmText").innerHTML =
        "Thank you <b>" + name + "</b>!<br><br>" +
        "<b>Booking ID:</b> " + bookingId + "<br>" +
        "<b>Trip:</b> " + selectedTrip.name + "<br>" +
        "<b>Route:</b> " + selectedTrip.from + " → " + selectedTrip.to + "<br>" +
        "<b>Seats:</b> " + seats + "<br>" +
        "Email sent to: " + email;

    showSection("confirmation");
}