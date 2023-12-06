import express from 'express';

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.get("/about", (req, res) => {
    res.render("about.ejs");
});
app.get("/category", (req, res) => {
    res.render("categories.ejs");
});
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});
app.get("/bio", (req, res) => {
    res.render("bio.ejs");
});
app.get("/faq", (req, res) => {
    res.render("faq.ejs");
});

app.listen(port, () => {
    console.log("Server running on port: " + port);
});