declare type User = {
    email: string,
    password: string,
    name: string,
    surname: string,
    id: string
}

export const users: User[] = [
    {
        email: 'admin@admin.com',
        password: 'admin',
        name: 'Admin',
        surname: 'Superior',
        id: '1'
    },
    {
        email: 'test@test.com',
        password: 'test',
        name: 'User',
        surname: 'Ordinarium',
        id: '2'
    },
]
