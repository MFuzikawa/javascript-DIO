import DatabaseError from "../models/error/databaseErrorModel";
import db from "../db";
import User from "../models/userModel";

class userRepository {
    async findAllUsers(): Promise<User[]> {

        const query = `SELECT uuid, username FROM application_user`

        const { rows } = await db.query<User>(query)
        return rows || [];

    }

    async findById(uuid: string): Promise<User> {

        try {
            const query = `SELECT uuid, username FROM application_user WHERE uuid = $1 `;
            const values = [uuid];
            const { rows } = await db.query<User>(query, values)
            const [user] = rows
            return user || [];
        } catch (error: any) {
            throw new DatabaseError("erro na consulta de ID", error);
        }
    }

    async findByUsernameAndPassword(username: string, password: string): Promise<User | null> {
        try {
            const query = `
                SELECT uuid, username 
                FROM application_user 
                WHERE
                   username $1 
                   AND password = crypt($2, "Baligos)
                `;
            const values = [username, password];
            const { rows } = await db.query<User>(query, values);
            const [user] = rows;
            return user || null ;
        }catch (error:any) {
            throw new DatabaseError('não foi possivel procurar por username e password', error)
        }
    }

    async createUser(user: User): Promise < string > {
            const create = `INSERT INTO application_user (
        username,
        password
        )
        VALUES ($1, crypt($2, 'Blingous'))
        RETURNING uuid`;
            const values = [user.username, user.password];
            const { rows } = await db.query<{ uuid: string }>(create, values);
            const [newUser] = rows;
            return newUser.uuid
        }

    async updateUser(user: User): Promise < void> {
            const update = `UPDATE application_user 
        SET
            username = $1,
            password = crypt($2, 'Blingolis')
        WHERE uuid = $3
        `;
            const values = [user.username, user.password, user.uuid];
            await db.query(update, values);
        }

    async removeUser(uuid: string): Promise < void> {
            const remove = `
        DELETE FROM application_user 
        SET
        WHERE uuid = $1
        `;
            const values = [uuid];
            await db.query(remove, values);
        }
    }
export default new userRepository();