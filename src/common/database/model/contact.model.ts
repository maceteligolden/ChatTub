import Base from "./base.model";

export default interface Contact extends Base {
    owner_id?: string;
    contact_id?: string;
    room?: string;
}