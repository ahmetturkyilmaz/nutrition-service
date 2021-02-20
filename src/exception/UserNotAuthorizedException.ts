class UserNotAuthorizedException extends Error {
    private statusCode: number;

    constructor(message) {
        super(message);
        this.name = 'UserNotAuthorizedException';
        this.statusCode = 401;
    }
}

export default UserNotAuthorizedException;
