import tv1 from "./electronics/tv1.jpg"
import tv2 from "./electronics/tv2.jpg"
import tv3 from "./electronics/tv3.jpg"
import tv4 from "./electronics/tv4.jpg"
import lap1 from "./electronics/latop1.jpg"
import lap2 from "./electronics/laptop2.jpg"
import lap3 from "./electronics/laptop3.jpg"
import lap4 from "./electronics/laptop4.jpg"
import phone1 from "./electronics/mob1.jpg"
import phone2 from "./electronics/mob1.jpg"
import chair1 from "./furniture/fur3.jpg"
import table1 from "./furniture/fur4.jpg"
import jac1 from "./clothes/cloth1.jpg"
import bag1 from "./clothes/cloth2.jpg"



const productImages = {
  electronics: {
    "Smart Tv": { tv1, tv2, tv3, tv4 },
    laptops: { lap1, lap2, lap3, lap4 },
    "Smart Phones": { phone1, phone2 }
  },
  furniture: {
    Chair: { chair1 },
    Table: { table1 }
  },
  clothes: {
    Jacket: { jac1 },
    Bag: { bag1 }
  }
}

export default productImages