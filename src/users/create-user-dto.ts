
export class CreateUserDto {
    readonly name: string;
    readonly age: number;
    readonly email: string;
    readonly phone: number
    constructor(
      private newName: string,
      private newAge: number,
      private newEmail:string,
      private newPhone: number
    ) {}
  }
  