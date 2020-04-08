import { Router } from 'express';
import { articleController } from '../controller/article';
import { categoryController } from '../controller/category';

export const categoryRouter = Router();

// get de la page d'accueil
categoryRouter.get('/', (req, res, next) => {
    const category = categoryController.get.category();

    return res.render('tag', { category: category });
});

//get avec en parametre la categorie selectionner
categoryRouter.get('/:tag', (req, res, next) => {
    const { tag } = req.params;
    const { page } = req.local;
    console.log({tag, page});
    
    const articles = articleController.get.list.by.pageAndTag(tag, page);

    return res.render('index', { articles: articles });
});

