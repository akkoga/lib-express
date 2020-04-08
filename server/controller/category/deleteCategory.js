import { database } from "../../database/connection";

export const deleteTagByID = (id) => {

    const req = `DELETE FROM category WHERE id = "${id}";`;

    return database.query(req)
        .then(( [rows] ) => {
            return { result: rows};

        }).catch((err) => {
            console.log(err);
        });
}