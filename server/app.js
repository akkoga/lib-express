import express from 'express';
import helmet from 'helmet';
import path from 'path';

import { database } from './database/connection';

import { router } from './routes/router';


const app = express();
const PORT = process.env.NODE_PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';
const dirs = {
    views: '../public/views',
    public: '../public'
}; 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(express.static(path.join(__dirname, dirs.public)));


app.set('views', path.join(__dirname, dirs.views));
app.set('view engine', 'pug');

app.disable('x-powered-by');


/* Route */
app.use('/', router.index);
app.use('/article', router.article);
app.use('/category', router.category);
app.use('/dashboard', router.dashboard.index);
app.use('/dashboard/article', router.dashboard.article);
app.use('/dashboard/tag', router.dashboard.category);


app.use((req, res, next) => {
    res.status(404).render('error/404');
});

app.use((err, req, res, next) => {
    res.status(500).render('error/500',{error:err.stack});
});

database.connect(err => {
    if (err) {
        console.log("Connexion à la base de donnée impossible")
        console.log(err)
    } else {
        app.listen(PORT, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Server listening on http://localhost:${PORT}`)
            }
        });
    }

});