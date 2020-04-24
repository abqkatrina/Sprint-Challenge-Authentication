const sessionConfig = {
    name: 'kermit',
    secret: 'not so secret',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitiated: false
}
module.exports = sessionConfig;