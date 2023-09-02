module.exports = () => {
    return (req, res, next) =>{
        req.logData = `${req.method} - ${req.url}`
        next();
    }
} 