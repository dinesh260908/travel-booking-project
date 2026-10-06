// ========== MY BOOKINGS MODULE ==========
function loadMyBookings() {
    var user = getCurrentUser();
    var box = document.getElementById("bookingsList");

    if (!user) {
        box.innerHTML = "<p>Please login to see your bookings.</p>";
        return;
    }
    if (!user.bookings || user.bookings.length === 0) {
        box.innerHTML = "<p>No bookings yet. Go to Search and book a trip!</p>";
        return;
    }

    var html = "";
    for (var i=0; i<user.bookings.length; i++) {
        var b = user.bookings[i];
        html += '<div class="booking-item">' +
            '<h3 style="color:#0b3d91;">' + b.type.toUpperCase() + ' - ' + b.name + '</h3>' +
            '<p><b>ID:</b> ' + b.id + ' | <b>Seats:</b> ' + b.seats + '</p>' +
            '<p>' + b.from + ' → ' + b.to + ' | ' + b.date + '</p>' +
            '<p><b>Price:</b> ' + b.price + ' | Booked: ' + b.bookedOn + '</p>' +
        '</div>';
    }
    box.innerHTML = html;
}