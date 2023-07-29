export default interface IService<Request, Response> {
    execute(req: Request): Promise<Response>
}