export class ClientModel {
    public id: number;
    public name: String = "";
    public lastName: String = "";
    public email: String = "";
    public phones: String[];
    public birthday: Date;
    public sex: String = "";
    constructor() {
        this.phones = [];
    }

}