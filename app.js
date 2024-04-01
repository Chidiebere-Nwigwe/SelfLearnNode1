const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();


// connect to mongodb
const dbURI = 'mongodb+srv://netninja:test1234@cluster0.wojwcap.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=>
        //listen for requests
app.listen(3000))
    .catch((err)=> console.log(err));



// register view engine
app.set('view engine', 'ejs');



//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req,res)=>{
// const blog = new Blog({
//     title: 'new blog 2',
//     snippet: 'about my new blog',
//     body: 'more about my new blog'
// });

//     blog.save()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })


// to get all blogs
// app.get('/all-blogs', (req, res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })

// // to get a single blog
// app.get('/single-blogs', (req, res)=>{
//     Blog.findById("660a5430e5e11b2d078a9802")
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })

app.get('/',(req,res)=>{
    // res.send('<p>home page<p>');
    res.redirect('/blogs');
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    // ];
    // res.render('index',  { title: "Home",  blogs} );
})
app.get('/about',(req,res)=>{
    // res.send('<p>about page<p>');
    res.render('about', { title: "About"});
})

//blog routes
app.use('/blogs', blogRoutes);


//redirects
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about');
// })

// 404 page
app.use((req, res)=>{
    res.status(404).render('404', {title: '404 Error Page'});

})