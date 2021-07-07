import * as dotenv from 'dotenv';

dotenv.config();

export const sqlConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
}

export const jwtConfig = {
    secret: process.env.JWT_SUPER_MEGA_SECRET,
    expiration: process.env.JWT_EXPIRATION
}