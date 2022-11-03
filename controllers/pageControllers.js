const vistaPrincipal = (req,res) =>{
    res.render('index.html');
}

const vistaCV = (req,res) =>{
    res.render('cv.html');
}

module.exports = {
    vistaPrincipal,
    vistaCV
}