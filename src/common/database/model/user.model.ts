import Base from "./base.model";

export default interface User extends Base {
    name?: string;
    phone?: number;
    avatar?: string;
    status?: string;
    about?: string;
}