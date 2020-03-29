import { database } from "../../database/connection";
import { stringConverter } from "./utilitaire/stringConverter";
import { articleModifier } from "./utilitaire/articleModifier";

export const getArticleByID = (id) => {

    const req = `SELECT id, title, content, DATE_FORMAT(date, "%d/%m/%Y") AS date, DATE_FORMAT(update, "%d/%m/%Y") AS update
                    FROM article
                    WHERE id = ${id};`;

    return database.query(req, (error, result, fields) => {
        if (error) return console.error(error);
        return result.map(row => {
            logger.trace("row", row);
            return {
                id: row.id,
                title: row.title,
                content: row.content,
                date: row.date,
                update: row.update,
                author: row.author,
                cateogry: stringConverter(row.list),
                isUpdate: isModifiedArticle(row.date, row.update)
            }
        })
    })
}