import * as express from 'express';
import * as path from 'path';
import router from './routes';

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(router);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
