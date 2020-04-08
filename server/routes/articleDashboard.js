import { Router } from 'express';
import { articleController as article } from '../controller/article';

export const dashboardArticleRouter = Router();

//afficher tout les articles
dashboardArticleRouter.get('/', (req, res, next) => {
    const { page } = req.query;

    const articles =  article.get.list.for.dashboard(page);
    return res.render('dashboard/article', {
        title: 'Dashboard', 
        articles
    });
});

//recuperer un article existant
dashboardArticleRouter.get('/:id', (req, res, next) => {
    const { id } = req.body;
    const article = article.get.by.id(id);
    return res.status(200).json('dashboard/article', { article });
});

//creation d'un article
dashboardArticleRouter.post('/', (req, res, next) => {
    const { body } = req;
     article.post(body);
    return res.status(201).redirect('/dashboard/article');
});

//supprimer l'article
dashboardArticleRouter.delete('/:id', (req, res, next) => {
    const { id } = req.body;
    const result = article.delete.by.id(id);
    return res.json(result);
});

