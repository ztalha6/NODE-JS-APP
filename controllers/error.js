exports.get404 = (req, res) => {
    res.status(404).render('not-found', {
        pageTitle: "Page not Found"
    });
}