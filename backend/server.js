const express = require("express");
const assert = require("assert");
const cors=require('cors')
const { MongoClient, ObjectID } = require("mongodb");
const bodyParser = require("body-parser");






// CREATION APP EXPRESS SERVER
const app = express();



 //APP PARSER
 app.use(bodyParser.json());
app.use(cors());


//CREATION DB
const MongoURL = 'mongodb+srv://h3xor:794613@devexpe-1i4ix.mongodb.net/test?retryWrites=true';
const dbName='valnt'  

MongoClient.connect(MongoURL, (err, client) => {
  assert.equal(err, null, "connection failed");
  console.log("success of connection between db and server");
  var db = client.db(dbName);



  // TEST API
  app.get("/",(req,res)=>{
    res.send("welcome to my API")
    })




    // ADD USER
app.post("/users",(req,res)=>{
  const {body} =req;
  db.collection('Users').insertOne(body,(err,data)=>{
    if(err){
      res.status(400).send('failed to insert')
    }
    else{
      res.send(body)
    }
  })
})



// ADD POST
    app.post("/posts",(req,res)=>{
      const {body} =req;
      db.collection('Posts').insertOne(body,(err,data)=>{
        if(err){
          res.status(400).send('failed to insert')
        }
        else{
          res.send(body)
        }
      })
    })





    // GET ALL USERS
    app.get("/users",(req,res)=>{
      db.collection('Users').find().toArray((err,data)=>{
        if(err){
          res.status(404).send('could not fetch data')
    
        }
        else{res.send(data)}
      })
    })




    //GET ALL POSTS
    app.get("/posts",(req,res)=>{
      db.collection('Posts').find().toArray((err,data)=>{
        if(err){
          res.status(404).send('could not fetch data')
    
        }
        else{res.send(data)}
      })
    })


// GET ONE SPECIFIC USER
app.get("/users/:id",(req,res)=>{
 const id= req.params.id;
 db.collection('Users').findOne({_id: ObjectID(id)}, (err,data)=>{
   if(err){
     res.status(404).send('user not exist')

   }
   else{
     res.send(data)
   }
 })
 
})
//get user login
app.post("/login",(req,res)=>{
  const email= req.body.email;
  const password=req.body.password
  db.collection('Users').findOne({email: email,password:password}, (err,data)=>{
    if(err){
      res.status(404).send('user not exist')
 
    }
    else{
      res.send(data)
    }
  })
  
 })




// GET ONE SPECIFIC POST

app.get("/Posts/:id",(req,res)=>{
  const id= req.params.id;
  db.collection('Posts').findOne({_id: ObjectID(id)}, (err,data)=>{
    if(err){
      res.status(404).send('post not exist')
 
    }
    else{
      res.send(data)
    }
  })
  
 })





 // MODIFY USER
app.put('/modify_user/:id',(req,res)=>{
  const id= req.params.id;
  const body= req.body
  db.collection('users').findOneAndUpdate({_id:ObjectID(id)},{$set: {...body}},(err,data)=>{
if (err){
  res.status(400).send('failed to modify')
}
else{
  res.send(body)
}
  })

})




 // MODIFY POST
 app.put('/modify_post/:id',(req,res)=>{
  const id= req.params.id;
  const body= req.body
  db.collection('posts').findOneAndUpdate({_id:ObjectID(id)},{$set: {...body}},(err,data)=>{
if (err){
  res.status(400).send('failed to modify')
}
else{
  res.send(body)
}
  })

})


// DELETE USER
app.delete('/delete_user/:id',(req,res)=>{
  const id=req.params.id;
  db.collection('users').findOneAndDelete({_id:ObjectID(id)},(err,data)=>{
    if (err){
      res.status(400).send('failed to delete')
    }
    else{
      res.send(data.value)
    }
  })
})

});
// DELETE POST
app.delete('/delete_post/:id',(req,res)=>{
  const id=req.params.id;
  db.collection('posts').findOneAndDelete({_id:ObjectID(id)},(err,data)=>{
    if (err){
      res.status(400).send('failed to delete')
    }
    else{
      res.send(data.value)
    }
  })
})


















app.listen(4000, () => {
  console.log("server is listen on port 4000");



});

