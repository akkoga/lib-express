import { database } from "../../database/connection";

export const getCategoryId = (id) => {
    const req = `SELECT * FROM category WHERE id = "${id}";`;

    return database.query(req)
    .then(( [rows] ) => {
        const result = rows[0];

        logger.info("Result:", result);
        return {
            id: result.id,
            tag: result.tag
        };

    }).catch((err) => {
        console.log(err);
    });
}