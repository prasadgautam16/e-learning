export interface Course {
    id: string,
    courseCreator: string,
    courseDescription: string,
    discount: number,
    discountValidTill: string,
    price: number,
    tags: string[],
    title: string,
    isWishList: boolean,
    isAddToCart: boolean,
    isPurchased: boolean
}
