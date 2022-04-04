export interface Product {
    id: number;
    title: string;
    description: string;
    author: string;
    tags: Array<string>;
    price: number;
    discountedPrice: number;
}