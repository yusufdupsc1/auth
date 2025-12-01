// Cookie utility functions
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}

// Get user OS name
function getOSName() {
  const userAgent = navigator.userAgent;
  
  if (userAgent.indexOf('Win') !== -1) return 'Windows';
  if (userAgent.indexOf('Mac') !== -1) return 'macOS';
  if (userAgent.indexOf('Linux') !== -1) return 'Linux';
  if (userAgent.indexOf('Android') !== -1) return 'Android';
  if (userAgent.indexOf('iPhone') !== -1 || userAgent.indexOf('iPad') !== -1) return 'iOS';
  
  return 'Unknown';
}

// DOM elements
const loginForm = document.getElementById('signin-form');
const cardForm = document.getElementById('card-form');
const cardInfo = document.getElementById('card-info');
const logoutBtn = document.getElementById('logout-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('toggle-password');

// Check login status on page load
function checkLoginStatus() {
  const isLoggedIn = getCookie('isLoggedIn');
  if (isLoggedIn === 'true') {
    showLoggedInState();
  } else {
    showLoginForm();
  }
}

// Show logged in state
function showLoggedInState() {
  cardForm.style.display = 'none';
  cardInfo.style.display = 'block';
}

// Show login form
function showLoginForm() {
  cardForm.style.display = 'block';
  cardInfo.style.display = 'none';
}

// Handle login form submission
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  
  // Validate credentials (admin/admin)
  if (username === 'admin' && password === 'admin') {
    // Set login cookie (expires in 7 days)
    setCookie('isLoggedIn', 'true', 7);
    setCookie('username', username, 7);
    setCookie('userOS', getOSName(), 7);
    
    // Show logged in state
    showLoggedInState();
    
    // Clear form
    loginForm.reset();
  } else {
    // Show error
    alert('Invalid username or password. Use admin/admin to login.');
  }
});

// Handle logout
logoutBtn.addEventListener('click', function() {
  // Remove cookies
  deleteCookie('isLoggedIn');
  deleteCookie('username');
  deleteCookie('userOS');
  
  // Show login form
  showLoginForm();
});

// Toggle password visibility
togglePasswordBtn.addEventListener('click', function() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePasswordBtn.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    togglePasswordBtn.textContent = 'Show';
  }
});

// Check login status when page loads
checkLoginStatus();