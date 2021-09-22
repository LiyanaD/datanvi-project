const controller = {
    getHomePage: function (req, res) {
            res.render('main', {
                title: 'Home',
            })
    
    },   
}
module.exports = controller;
