import { database } from "../../database/connection";

export const getUserCount = () => {

    const req = `SELECT COUNT(id) AS count FROM Users ;`;

    return database.query(req)
    .then(( [rows] ) => {
        const result = rows[0].count;
        return {length: result};

    }).catch((err) => {
        console.log(err);
    });
}