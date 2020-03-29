import { database } from "../../database/connection";

export const postCategory = (name) => {
    const req = `INSERT INTO category (tag) VALUE ("${name}");`;

    return database.query(req)
        .then(( [rows] ) => {
            return {result: rows};
        }).catch((err) => {
             console.log(err);
        });
}