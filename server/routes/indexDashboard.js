import { Router } from 'express';
import { categoryController } from '../controller/category';
import { userController } from '../controller/user';
import { articleController } from '../controller/article';

export const dashboardIndexRouter = Router();

//get de la page d'accueil
dashboardIndexRouter.get('/', (req, res, next) => {
    const articleNumber =  articleController.get.count();
    const tagNumber =  categoryController.get.count();
    const userNumber =  userController.get.count();

    return res.render('dashboard/index', {
        title: 'Dashboard',
        article: articleNumber,
        tag: tagNumber,
        user: userNumber,
    });
});