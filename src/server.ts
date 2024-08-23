import express from 'express';
import mestreRoutes from './routes/MestreRoutes'


const app = express();
const port = 3000;

app.use(express.json())

app.use('/mestre', mestreRoutes)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})