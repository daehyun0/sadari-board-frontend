class ProductInList {
    image
    name
    price
    avgScore
    reviewCount


    constructor(image, name, price, avgScore, reviewCount) {
        this.image = 'http://' + image;
        this.name = name;
        this.price = price;
        this.avgScore = avgScore;
        this.reviewCount = reviewCount;
    }
}

export default ProductInList;