
var express = require("express");
var router = express.Router();


/* GET login page. */
router.get("/", function (req, res, next) {
    let sesion = req.session?.user;
    let error=req.session?.loginErr;
    if (sesion) {
        res.redirect("/home");
    } else {
        if(error){
            res.render("login",{error});
            req.session.loginErr=null;
        }
        res.render("login");
    }
});



//POST validate user
router.post("/login", (req, res) => {
    let user = {
        _id: 1,
        name: "vyshnav pc",
        password: "12345",
    };
    const {
        name,
        password
    } = req.body;
    if (name === user.name & password === user.password) {
        req.session.user = true;
        res.redirect("/home");
    } else {
        req.session.loginErr='invalid username and password'
        res.redirect('/');
    }
});

router.get("/home", (req, res) => {
    let products = [{
        name: "hai",
    },
    {
        name: "hello",
    },
    {
        name: "how are you",
    },
    {
        name: " i am fine",
    },
    ];
    console.log(req.session);
    if (req.session?.user) {
        res.render("homePage", {
            user: true,
            products,
        });
    } else {
        res.redirect("/");
    }
});

router.get("/signout", (req, res) => {
    req.session.user = false;
    res.redirect("/");
});
module.exports = router;