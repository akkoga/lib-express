import { database } from "../../database/connection";

export const getCategory = () => {

    const req = `SELECT * FROM category;`;

    return database.query(req)
        .then(( [rows] ) => {
            return rows;

        }).catch((err) => {
            console.log(err);
        });
}