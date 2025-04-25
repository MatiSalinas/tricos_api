import express, {json} from "express"
import cors from "cors"

const PORT = 3000;
const HOST = "0.0.0.0"

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
    res.status(200).send("Hola Mundo")
})

app.listen(PORT, HOST,()=>{
    console.log(`La app esta escuchando en ${HOST} en el puerto ${PORT}`);
})
