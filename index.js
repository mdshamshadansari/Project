const express = require('express');
const path = require('path');
const app = express();
const PORT = 6010;
const userRouter = require('./routes/userRoutes');
const { connectMongoDB } = require('./services/connections');
const user = require('./models/userSchema');

//Connections
connectMongoDB("mongodb://localhost:27017/users");

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views')); 

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use('/api/users', userRouter);

//Views Rendering
app.get("/test", async (req, res) => {
    const allUsers = await user.find({});
    res.render("view", { 
        users : allUsers
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

