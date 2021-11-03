import ReviewScoreFormatter from "@/utils/ReviewScoreFormatter";

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
        this.price = ReviewScoreFormatter.format(price);
        this.avgScore = ReviewScoreFormatter.format(avgScore);
        this.reviewCount = reviewCount;
    }
}

export default ProductInList;