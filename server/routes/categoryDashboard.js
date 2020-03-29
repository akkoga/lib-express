import { Router } from 'express';
import { categoryController } from '../controller/category';

export const dashboardCategoryRouter = Router();

//affichage des articles
dashboardCategoryRouter.get('/', (req, res, next) => {
    const category = await categoryController.get.category();
    return res.render('tag', {title: 'Dashboard', category });
});

//ajout d'une categorie
dashboardCategoryRouter.post('/', (req, res, next) => {
    const { body } = req;
    const result = await categoryController.post(body.tag);
    return res.status(201).json(result);
});


//modification de la categorie
dashboardCategoryRouter.patch('/:id', (req, res, next) => {
    const { body } = req;
    const result = await categoryController.patch.by.id(body);
    return res.status(200).json(result);
});

//supprimer un tag
dashboardCategoryRouter.delete('/:id', (req, res, next) => {
    const { id } = req.body;
    const result = await categoryController.delete.by.id(id);
    return res.json(result);
});
