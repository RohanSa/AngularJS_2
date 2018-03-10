
export class Employee {

    id: number;
    name: string;

    public constructor(init?: Partial<Employee>) {
        Object.assign(this, init);
    }
}