export interface AnimalI {
    id: number,
    name: string,
    species: string,
    continent: string,
    image: string,
    size: string,
    food: string[],  
    habitat: string[]
}

export interface UserI{
    id?: string;
    email: string;
    password: string;
    role?: string;
}