export class CreateProductDto {
    readonly title: string;
    readonly description: number;
    readonly price: number;
    readonly picture: string
    constructor(
      private newTitle: string,
      private newDescription: string,
      private newPrice:number,
      private newPicture: string
    ) {}
}