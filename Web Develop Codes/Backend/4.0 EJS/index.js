import express from "express";

const app = express();
const port = 3000;


app.get("/", (req, res) => {

    const d = new Date("2026-03-02");
    const day = d.getDay();

    let type = "a weekday";
    let adv = "it's time to work hard";

    if(day === 0 || day === 6){
        type = "a weekend"
        adv = "it's time to relax"
    }

    res.render("index.ejs", {
        type: dayType,
        adv: advice
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});