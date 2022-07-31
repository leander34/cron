import agendaJob from './app/schedule/buscarAgenda'
import express, { Request, Response } from 'express'
const app = express()
app.use(express.json())


app.post('/user', (req: Request, res: Response) => {
    const { name, email  } = req.body
    const user = {
        name,
        email
    }
    return res.status(201).json(user)
})

app.get('/canceljobs', (req: Request, res: Response) => {
    agendaJob.stop()
    console.log('job cancelado')
    return res.send('cancelado')
})

app.listen(3333, () => {
    console.log('server is running on localhost:3333')
})