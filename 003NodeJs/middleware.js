const reqFilter = (req,res,next) => {
    if(!req.query.name)
    {
        res.send("please enter age")
    }
    else if (req.query.name === "dk")
    {
        next(); 
    }
}

module.exports = reqFilter;