// ========== AUTH MODULE ==========
function getUsers() {
    return JSON.parse(localStorage.getItem("kl_users") || "[]");
}
function saveUsers(users) {
    localStorage.setItem("kl_users", JSON.stringify(users));
}
function getCurrentUser() {
    return JSON.parse(localStorage.getItem("kl_currentUser") || "null");
}
function setCurrentUser(user) {
    localStorage.setItem("kl_currentUser", JSON.stringify(user));
    updateNavbar();
}

function updateNavbar() {
    var user = getCurrentUser();
    var info = document.getElementById("userInfo");
    var btn = document.getElementById("authBtn");
    if (user) {
        info.innerText = "Hi, " + user.name;
        btn.innerText = "Logout";
        btn.onclick = doLogout;
    } else {
        info.innerText = "";
        btn.innerText = "Login";
        btn.onclick = function(){ showSection('login'); };
    }
}

function doSignup() {
    var name = document.getElementById("signupName").value.trim();
    var email = document.getElementById("signupEmail").value.trim();
    var pass = document.getElementById("signupPassword").value;
    var phone = document.getElementById("signupPhone").value.trim();

    if (!name || !email || !pass) {
        alert("Please fill Name, Email and Password");
        return;
    }

    var users = getUsers();
    for (var i=0; i<users.length; i++) {
        if (users[i].email === email) {
            alert("Email already exists. Please login.");
            return;
        }
    }

    var newUser = { name:name, email:email, password:pass, phone:phone, bookings:[] };
    users.push(newUser);
    saveUsers(users);
    setCurrentUser(newUser);
    alert("Account created successfully!");
    showSection("home");
}

function doLogin() {
    var email = document.getElementById("loginEmail").value.trim();
    var pass = document.getElementById("loginPassword").value;

    var users = getUsers();
    var found = null;
    for (var i=0; i<users.length; i++) {
        if (users[i].email === email && users[i].password === pass) {
            found = users[i];
            break;
        }
    }

    if (found) {
        setCurrentUser(found);
        alert("Login successful! Welcome " + found.name);
        showSection("home");
    } else {
        alert("Wrong email or password");
    }
}

function doLogout() {
    localStorage.removeItem("kl_currentUser");
    updateNavbar();
    alert("Logged out");
    showSection("home");
}