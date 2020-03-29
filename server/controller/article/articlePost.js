import { database } from "../../database/connection";

export const postNewArticle = async (page) => {
    const req = `INSERT INTO article ('title', 'content', 'date', 'id_user');`;


    return database.query(req, (error, result, fields) => {
        if (error) return console.error(error);
        return result.map(row => {
            return {
                id: row.id,
                title: row.title,
                author: row.author,
                count: {
                    tag: row.tagCount,
                    comment: row.commentCount
                }
            }
        });
    });
}