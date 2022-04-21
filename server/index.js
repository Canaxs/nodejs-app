const app = require('./app')
const log = require('./utils/Log')

const PORT = 5000

app.listen(PORT, () => {
    log.info(`Server running on port: ${PORT}`)
});