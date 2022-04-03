export class Product {
    id: number;
    title: string;
    description: string;
    author: string;
    tags: Array<string>;
    price: number;
    discountedPrice: number;

    constructor(id: number, title: string, description: string = '', author: string, tags: Array<string>, price: number = 0, discountedPrice: number = 0) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
        this.tags = tags;
        this.price = price;
        this.discountedPrice = discountedPrice;
    }
}