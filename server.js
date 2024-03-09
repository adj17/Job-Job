const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
 const secretKey='3036f07992791a5b5f76b27402e800c75e01e6c0eb72266c91f1a8cedf87cfd99e0280a17dc583c2456675229a639ba0df602ee962ebf5a37126ced2efb27b3f'; // Replace with your actual secret key
const cookieParser = require('cookie-parser');

mongoose.connect('mongodb://127.0.0.1:27017/job');

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// Connect to MongoDB
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  designation: String,
  usertype: String,
});

const User = mongoose.model('User', userSchema);
const bcrypt = require('bcrypt');
const saltRounds = 10; 

// Register route
app.post('/register', async (req, res) => {
  const { username, email, password, designation, usertype } = req.body;

  try {
   
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({ username, email, designation, usertype, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// View users route
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching users' });
  }
});

app.post('/slogin', async (req, res) => {
  try {
    const { email, password, usertype } = req.body;
    const user = await User.findOne({ email, usertype });

    if (!user) {
      return res.json({
        error: "No user found",
      });
    }
    if (!password) {
      return res.json({
        error: "Type password",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password); 

    if (!passwordMatch) {
      return res.status(200).send({
        error: "Passwords don't match",
      });
    }
    if (passwordMatch) {
      const token = await jwt.sign({ email, usertype }, secretKey, { expiresIn: "7d" });

    console.log(user);
      return res.status(200).send({
        success: true,
        message: "Login success",
        user, 
        token,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
});



// Logout route
app.post('/logout', (req, res) => {
  
  res.clearCookie('authToken');


  localStorage.removeItem('user');

  res.status(200).json({ message: 'Logged out successfully' });
});
// profile

app.get('/Profile', (req, res) => {

  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    const user = JSON.parse(storedUser);
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});
  //edit 
  app.put('/profile/users/:userId', async (req, res) => {
    const userId = req.params.userId;
    const updatedUser = req.body;
  
    try {
      const result = await User.findByIdAndUpdate(userId, updatedUser, { new: true });
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
 
// delete account
app.delete('/api/users/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const result = await User.findByIdAndDelete(userId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
//  job schema 

const jobSchema = new mongoose.Schema({
  Companyname: String,
  role: String,
  experience: String,
  currentDate: {
    type: Date,
    default: Date.now, 
  },
  selectedDate: Date,
});

const Job = mongoose.model('Job', jobSchema);

app.post('/add', async (req, res) => {
  try {
    const newjob = new Job(req.body);
    await newjob.save();
    res.status(201).json({ message: 'Job added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Job addition failed' });
  }
});

app.get('/job', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching jobs' });
  }
});

app.delete("/usersdata/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting user' });
  }
});

app.delete("/jobdata/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Job.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting job' });
  }
});

app.put('/jobdata/:id', async (req, res) => {
  const { id } = req.params;
  const updatedJobData = req.body;

  try {
    await Job.findByIdAndUpdate(id, updatedJobData);
    res.json({ message: 'Job updated successfully' });
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).json({ error: 'Error updating job' });
  }
});


app.get('/jobdataview/:id', async (req, res) => {
  const  id  = req.params.id;


  try {
    const d = await Job.findById(id);
    res.json(d);
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).json({ error: 'Error updating job' });
  }
});

// application

const applyschema = new mongoose.Schema({
  username: String,
  email: String,
  role: String,
  Companyname: String,  
});

const Apply = mongoose.model('Applicant', applyschema);

app.post('/hire', async (req, res) => {  
  try {
    const newapply = new Apply(req.body);
    await newapply.save();
    res.status(201).json({ message: ' Applied successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Application failed' });
  }
});
app.get('/showhire', async (req, res) => {
  try {
    const applicants = await Apply.find();
    console.log(applicants);
    res.json(applicants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching application' });
  }
});
app.delete("/applydata/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Apply.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting job' });
  }
});
// userjobdetails
app.get('/showhires/:id', async (req, res) => {
  try {
    const username = req.params.id;
    console.log(username);
    const applicants = await Apply.find({ username: username }); 
    console.log(applicants);
    res.json(applicants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching application' });
  }
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
