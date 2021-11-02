class ProductInList {
    image
    name
    price
    avgScore
    reviewCount
    idx


    constructor(idx, image, name, price, avgScore, reviewCount) {
        this.idx = idx;
        this.image = 'http://' + image;
        this.name = name;
        this.price = price;
        this.avgScore = avgScore;
        this.reviewCount = reviewCount;
    }
}

export default ProductInList;