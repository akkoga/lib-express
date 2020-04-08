import { deleteCategory } from "./category/deleteCategory";
import { getCategory } from "./category/getCategory";
import { getCategoryCount } from "./category/getCategoryCount";
import { getCategoryId } from "./category/getIdCategory";
import { postCategory } from "./category/postCategory";
import { updateCategory } from "./category/updateCategory";

export const categoryController = {
    get: {
        count: getCategoryCount,
        category: getCategory,
        tag: {
            by: {
                id: getCategoryId
            }
        }
    },
    post: postCategory,
    delete: {
        by: {
            id: deleteCategory
        }
    },
    patch: {
        by: {
            id: updateCategory
        }
    }
}