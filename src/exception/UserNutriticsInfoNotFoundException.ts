import ErrorResponse from "./ErrorResponse";

class UserNutriticsInfoNotFoundException extends Error {
    constructor(message) {
        super(message);
        this.name = 'UserNutriticsInfoNotFoundException';
    }
}
export default  UserNutriticsInfoNotFoundException;
