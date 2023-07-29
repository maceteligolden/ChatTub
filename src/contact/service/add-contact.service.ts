import { injectable } from "tsyringe";
import Contact from "../../common/database/model/contact.model";
import ContactRepository from "../../common/database/repository/contact.repository";

@injectable() 
export default class AddContactService {
    constructor(
        private contactRepository: ContactRepository
    ) {

    }

    async execute(args: Contact) {
        try {
            const addContact = await this.contactRepository.createData(args);

            return addContact;
        }catch(err: any){
            return err
        }
    }
}