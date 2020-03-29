import { Router } from 'express';
import { articleRoutes } from '../controller/article';

export const articleRouter = Router();

//get avec l'id de l'article selectionner
articleRouter.get('/:id', (req, res, next) => {
    const { id } = req.local;

    const article = articleRoutes.get.by.id(id);

    return res.render('article', {
        article: article,
    });
});

