class DatabaseError extends Error {
    constructor(
        public message: string,
        public error?: Error
    ){
        super(message);
    }

}
export default DatabaseError;