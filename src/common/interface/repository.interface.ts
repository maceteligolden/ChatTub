export default interface IRepository <T> {
    createData(args: T): Promise<T>;
    updateData(id: string, body: T): Promise<T>;
    fetchData(args: T): Promise<T[]>;
    fetchOneData(id: string): Promise<T>;
    deleteData(id: string): Promise<void>;
}