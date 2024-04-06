const path = require('path');
const express = require('express');
const multer = require('multer');

const app = express();
const PORT = 4000;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      return cb(null,  uniqueSuffix + '-'+file.originalname )
    }
  })
  
  const upload = multer({ storage: storage })



app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static(path.join(__dirname, 'uploads')));


app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.render("homepage");
})

app.post("/upload",upload.single('profileImage'),(req,res)=>{

    console.log(req.body);
    console.log(req.file);

    res.render("homepage", { uploadedImage: req.file }); 

})

app.listen(PORT, ()=> {
    console.log("listening on port"+PORT);
})