import { indexRouter } from './index';
import { articleRouter } from './article';
import { categoryRouter } from './category';
import { dashboardIndexRouter } from './indexDashboard.js';
import { dashboardArticleRouter } from './articleDashboard.js';
import { dashboardCategoryRouter } from './categoryDashboard';

export const router = {
    index: indexRouter,
    article: articleRouter,
    category: categoryRouter,
    dashboard: {
        index: dashboardIndexRouter,
        article: dashboardArticleRouter,
        category: dashboardCategoryRouter
    }
}