import kurly from "./icon/kurly_logo.jpg";
import location from "./icon/location.png";
import dips from "./icon/dips.png";
import cart from "./icon/cart.png";
import search from "./icon/search.png";
import category from "./icon/category.png";
import vege from "./icon/vege.png";
import fruit from "./icon/fruit.png"
import fish from "./icon/fish.png";
import drink from "./icon/drink.png";
import meal from "./icon/meal.png";
import week from "./icon/week.png";
import addCart from "./icon/addCart.png";
import dips_detail from "./icon/dips_detail.png";
import review1 from "./review/review1.png";
import review2 from "./review/review2.png";
import review3 from "./review/review3.png";

const img = {
    kurly,
    location,
    dips,
    cart,
    search,
    category,
    vege,
    fruit,
    fish,
    drink,
    meal,
    week,
    addCart,
    dips_detail
}

const review = [
    {
        id: 1,
        name: "홍길동",
        desc: "거품도 잘나고 향도 은은하고 대용량이라 좋아요.",
        date: "2024.03.22",
        src: review1
    },
    {
        id: 2,
        name: "아무개",
        desc: "후기가 하도 좋길래 저도 주문했어요.",
        date: "2024.03.22",
        src: review2
    },
    {
        id: 3,
        name: "김철수",
        desc: "우와 엄청 크네요 가격도 저렴하고",
        date: "2024.03.22",
        src: review3
    }
]

export {img, review};