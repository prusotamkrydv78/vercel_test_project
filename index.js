const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
// Home page
app.get('/', (req, res) => {
  res.render('home', { 
    title: 'Home',
    active: 'home'
  });
});

// About page
app.get('/about', (req, res) => {
  res.render('about', { 
    title: 'About Us',
    active: 'about'
  });
});

// Login page
app.get('/login', (req, res) => {
  res.render('login', { 
    title: 'Login',
    active: 'login'
  });
});

// Process login form
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // In a real app, you would validate credentials here
  // For now, just redirect back to home
  res.redirect('/');
});

// Register page
app.get('/register', (req, res) => {
  res.render('register', { 
    title: 'Register',
    active: 'register'
  });
});

// Process registration form
app.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  // In a real app, you would validate and store user data
  // For now, just redirect to login
  res.redirect('/login');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;