import { database } from "../../database/connection";

export const updateCategory = ({id, category}) => {
    const req = `UPDATE category SET category = "${category}" WHERE id = "${id}";`;

    return database.query(req)
        .then(( [rows] ) => {
            return {result: rows};

        }).catch((err) => {
             console.log(err);
        });
}