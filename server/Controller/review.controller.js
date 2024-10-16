import reviewData from "../Modles/review.schema.modles.js";

const review = async (req, res) => {
    try {
        const { reviewowner, name, review } = req.body;
        if (!reviewowner || !name || !review) return res.send("all field are mendetery");

        const response = new reviewData({
            reviewowner: req.body.reviewowner,
            name: req.body.name,
            review: req.body.review
        })

        await response.save();
        return res.status(200).send("review submitted "+ response);
    } catch (error) {
        console.log("find error in review controller :: "+error);
    }
}

export { review };