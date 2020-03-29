import { database } from "../../database/connection";

export const getArticlesCount = () => {
    const req = `SELECT COUNT(id) AS count FROM article;`;

    return database.query(req)
    .then(( [rows] ) => {
        const result = rows[0].count;
        return {length: result};

    }).catch((err) => {
        console.log(err);
    });
}