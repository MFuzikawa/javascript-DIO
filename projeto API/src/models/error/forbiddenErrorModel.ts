export default class forbiddenError extends Error {

    constructor(
    public message: string,
    public error?: Error
){
    super(message);
}

}
