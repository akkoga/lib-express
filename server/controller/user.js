import { getUserCount } from "./user/getUser";

export const userController = {
    get: {
        count: getUserCount
    }
}