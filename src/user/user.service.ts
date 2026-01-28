import { Injectable } from '@nestjs/common';

export interface User {
    id: number;
    name: string;
    email: string;
}

@Injectable()
export class UserService {
    userData: User[] = [
        {
            id: 1,
            name: "Vijay Patel",
            email: "vijay@gmail.com"
        },
        {
            id: 2,
            name: "Amit Shah",
            email: "amit@gmail.com"
        },
        {
            id: 3,
            name: "Rahul Mehta",
            email: "rahul@gmail.com"
        },
        {
            id: 4,
            name: "Neha Sharma",
            email: "neha@gmail.com"
        },
        {
            id: 5,
            name: "Priya Desai",
            email: "priya@gmail.com"
        }
    ]

    getAllUsers() {
        return this.userData;
    }

    getUserById(id: number) {
        return this.userData.find(user => user.id === id);
    }

    createUser(user: User) {
        this.userData.push(user);
        return user;
    }

    updateUser(id: number, user: User) {
        this.userData = this.userData.map(u => u.id === id ? user : u);
        return user;
    }

    deleteUser(id: number) {
        this.userData = this.userData.filter(user => user.id !== id);
        return "User deleted";
    }
}
