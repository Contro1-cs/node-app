exports.get404 = (req, res, next) => {
    res.status(404).render('404', {
        'content': 'Page not found, just like probablity of you getting some bitches',
        'projectTitle': '404 Page not found'
    });
};
