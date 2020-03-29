import { database } from "../../database/connection";
import { stringConverter } from "./utilitaire/stringConverter";

export const getArticles = () => {

    const req = `SELECT id, title, LEFT(content, 200) as content, DATE_FORMAT(createdAt, "%d/%m/%Y") AS createdAt, DATE_FORMAT(a.updatedAt, "%d/%m/%Y") AS updatedAt, u.login as author, _tag.list, COALESCE(_comments.count, 0) as commentsCount 
                    FROM Articles
                    GROUP BY id;`;

    return database.query(req, (error, result, fields) => {
        if (error) return console.error(error);
        return rows.map(row => {
            return {
                id: row.id,
                title: row.title,
                content: row.content,
                createdAt: row.createdAt,
                updatedAt: row.updatedAt,
                author: row.author,
                category: stringConverter(row.list),
                commentsCount: row.commentsCount,
                isModified: isModifiedArticle(row.createdAt, row.updatedAt)
            }
        });
    });
}