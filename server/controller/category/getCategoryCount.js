import { database } from "../../database/connection";

export const getCategoryTotal = (id)=> {

    const req = `SELECT COUNT(id) AS count FROM category ;`;

    return database.query(req)
    .then(( [rows] ) => {
        const result = rows[0].count;

        logger.info("Result:", result);
        return {length: result};

    }).catch((err) => {
        console.log(err);
    });
}