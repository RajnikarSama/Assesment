export class User {
    userId: number;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    userStatus: string;
    department: string | null;

    constructor(
        userId: number,
        userName: string,
        firstName: string,
        lastName: string,
        email: string,
        userStatus: string,
        department: string | null
    ) {
        this.userId = userId;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userStatus = userStatus;
        this.department = department;
    }
}