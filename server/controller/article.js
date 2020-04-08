import { deleteArticleByID } from "./article/articleDelete";
import { postNewArticle } from "./article/articlePost";
import { getArticleByID } from "./article/articleGet";
import { getArticlesCount } from "./article/getArticlesCount";
import { getArticles } from "./article/getArticles";

export const articleController = {
    delete: {
        by: {
            id: deleteArticleByID
        }
    },
    get: {
        by: {
            id: getArticleByID
        },
        list:getArticles,
        count: getArticlesCount
    },
    post: postNewArticle
}