const app = require('./app')
const log = require('./utils/Log')
require("dotenv").config()

const PORT = process.env.PORT

app.listen(PORT, () => {
    log.info(`Server running on port: ${PORT}`)
});