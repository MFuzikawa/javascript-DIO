import express from 'express'

const server = express()
const port = 3000

server.get('/', (req, res) => res.send('Amo minha namorada!'))

server.listen(port, () => console.log(`Example app listening on port ${port}!`))
