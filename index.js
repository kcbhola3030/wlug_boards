const express = require("express");
const app = express();
const multer = require('multer')
const upload = multer({dest:'./images/'})
const {user} = require("./board.js");
const db = require('./db')
app.use(express.json());

app.get('/uploadUser',(req,res)=>{
  res.send('working')
})


app.post("/uploadUser", upload.single('img'),async (req, res) => {
try{ 
 const {name, board, quote, areaOfInterest, email, linkedin, insta} = req.body
 const img = req.file.path
 const newUser = new user({
  name,     
   board,
   quote,
   img,
   areaOfInterest, 
   email,
   linkedin,
   insta
  })
  console.log(newUser);
  await newUser.save()
  res.status(200).send("User saved successsfully "+ newUser);
  } catch (error) {
   console.log(error);
  }
});


app.get("/main", async (req, res) => {
  const main = await user.find({ board : 'main' });
  res.send(main);
});

app.get("/member", async (req, res) => {
const member = await user.find({ board : 'member' });
res.send(member);
});

app.get("/assistant", async (req, res) => {
const assistant = await user.find({ board : 'assistant' });
res.send(assistant);
});

app.get("/mentor", async (req, res) => {
  const mentor = await user.find({ board : 'mentor' });
  res.send(mentor);
  });


app.listen(3000, () => {
  try {
    console.log(`Server in on ${3000}`);
  } catch (e) {
    console.log(e);
  }
});
