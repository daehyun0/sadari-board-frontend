class ReviewScoreFormatter {
    static format(value) {
        return new Intl.NumberFormat('ko-kr', {
            style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 1
        }).format(value);
    }
}

export default ReviewScoreFormatter;