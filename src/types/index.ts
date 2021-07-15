import { Request } from 'express';

export interface RequestWithUser extends Request {
    user?: {
        id?: string;
        role?: string;
    }
}


export interface Posts {
    id: number;
    user_id: Users['id'];
    title: string;
    description: string;
    content: string;
    date: string;
}

export interface Users {
    id: string;
    email: string;
    password: string;
}

interface MySQL_Success {
    fieldCount: number;
    affectedRows: number;
    insertId: number;
    serverStatus: number;
    warningCount: number;
    message: string;
    protocol41: boolean;
    changedRows: number;
}

interface MySQL_Error {
    code: string;
    errno: number;
    sqlMessage: string;
    sqlState: string;
    index: number;
    sql: string;
}

export type MySQL_Res = MySQL_Success & MySQL_Error;