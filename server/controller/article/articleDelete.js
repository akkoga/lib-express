import { database } from "../../database/connection";

export const deleteArticleByID = (id) => {

    const req = `DELETE FROM article WHERE id = "${id}";`;

    return database.query(req)
        .then(( [rows] ) => {
            return { result: rows};

        }).catch((err) => {
            console.log(err);
        });
}