import tshirt from "../assets/tshirt.png";
import jeans from "../assets/jeans.png";
import shirt2 from "../assets/shirt2.png";
import shirt from "../assets/shirt.png";

import gym1 from "../assets/gym1.png";
import gym2 from "../assets/gym2.png";
import gym3 from "../assets/gym3.png";

import formal1 from "../assets/formal1.png";
import formal2 from "../assets/formal2.png";

const products = [

  // CASUAL PRODUCTS

  {
    id: 1,
    title: "Black T-shirt",
    price: "$120",
    image: tshirt,
    category: "casual",
    description:
      "Premium quality black t-shirt made from soft breathable fabric.",
  },

  {
    id: 2,
    title: "Jeans",
    price: "$240",
    image: jeans,
    category: "casual",
    description:
      "Stylish loose-fit jeans with modern premium streetwear design.",
  },

  {
    id: 3,
    title: "Casual Shirt",
    price: "$180",
    image: shirt2,
    category: "casual",
    description:
      "Classic casual shirt perfect for everyday wear and comfort.",
  },

  {
    id: 4,
    title: "Orange Casual Shirt",
    price: "$130",
    image: shirt,
    category: "casual",
    description:
      "Trendy orange shirt with comfortable lightweight material.",
  },

  // FORMAL PRODUCTS

  {
    id: 5,
    title: "Eton Shirts",
    price: "$300",
    image: formal1,
    category: "formal",
    description:
      "Elegant formal outfit perfect for office and meetings.",
  },

  {
    id: 6,
    title: "Classic Beige Checked Shirt",
    price: "$320",
    image: formal2,
    category: "formal",
    description:
      "Premium formal fashion with modern classy style.",
  },

  {
    id: 7,
    title: "Formal T-shirt",
    price: "$220",
    image: tshirt,
    category: "formal",
    description:
      "Premium modern formal t-shirt with elegant style.",
  },

  {
    id: 8,
    title: "Formal Jeans",
    price: "$280",
    image: jeans,
    category: "formal",
    description:
      "Elegant jeans suitable for formal fashion styling.",
  },

  {
    id: 9,
    title: "Formal Shirt",
    price: "$260",
    image: shirt2,
    category: "formal",
    description:
      "Classic formal shirt for office and meetings.",
  },

  {
    id: 10,
    title: "Orange Formal Shirt",
    price: "$240",
    image: shirt,
    category: "formal",
    description:
      "Stylish orange formal shirt with premium look.",
  },

  // PARTY PRODUCTS

  {
    id: 11,
    title: "FlexFit Wear",
    price: "$280",
    image: gym3,
    category: "party",
    description:
      "Trendy gym-style outfit for party fashion.",
  },

  {
    id: 12,
    title: "Party T-shirt",
    price: "$180",
    image: tshirt,
    category: "party",
    description:
      "Stylish party t-shirt with modern trendy look.",
  },

  {
    id: 13,
    title: "Party Jeans",
    price: "$260",
    image: jeans,
    category: "party",
    description:
      "Premium party jeans perfect for stylish outings.",
  },

  {
    id: 14,
    title: "Party Shirt",
    price: "$220",
    image: shirt2,
    category: "party",
    description:
      "Elegant party shirt with fashionable design.",
  },

  {
    id: 15,
    title: "Orange Party Shirt",
    price: "$240",
    image: shirt,
    category: "party",
    description:
      "Modern orange shirt perfect for parties and events.",
  },

  // GYM PRODUCTS

  {
    id: 16,
    title: "Sleeveless",
    price: "$200",
    image: gym1,
    category: "gym",
    description:
      "Comfortable gym wear for workouts and fitness training.",
  },

  {
    id: 17,
    title: "Cosmic Gym Wear",
    price: "$220",
    image: gym2,
    category: "gym",
    description:
      "Premium activewear with breathable material.",
  },

  {
    id: 18,
    title: "Women Top & Pants",
    price: "$250",
    image: gym3,
    category: "gym",
    description:
      "Modern gym collection for training and casual style.",
  },

];

export default products;