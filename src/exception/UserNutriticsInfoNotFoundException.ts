
class UserNutriticsInfoNotFoundException extends Error {
    statusCode: number;

    constructor(message) {
        super(message);
        this.name = 'UserNutriticsInfoNotFoundException';
        this.statusCode = 401;
    }

}

export default UserNutriticsInfoNotFoundException;
