import { Router } from 'express';
import { articleController } from '../controller/article';

export const indexRouter = Router();

//get de la page d'accueil
indexRouter.get('/', (req, res, next) => {

    const articles = articleController.get.list();

    return res.render('index', { articles: articles });
});