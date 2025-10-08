import { apiResultType, userType } from "./GlobalTypes";

export const loginAction = async (user : userType, inputs? : any) => {
    const httpresult : apiResultType = {
        state : 200,
        msg : 'ok',
        result : inputs
    }

    return httpresult;
}