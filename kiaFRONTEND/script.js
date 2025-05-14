const validUsername = "admin";
const validPassword = "1234";

function login(event) {
  event.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === validUsername && pass === validPassword) {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error-msg").textContent = "Usuario o contraseña incorrectos.";
  }
}

function toggleDetails(item) {
  item.classList.toggle("expanded");
  item.querySelector(".arrow").textContent = item.classList.contains("expanded") ? "🔼" : "🔽";
}
