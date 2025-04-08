export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  size?: string;
  weight?: string;
  rating?: {
    score: number;
    count: number;
  };
}

export interface Category {
  id: string;
  name: string;
  products: Product[];
  count: number;
}

// This would normally come from an API
export const categories: Category[] = [
  {
    id: "snacks",
    name: "Snacks",
    count: 70,
    products: [
      {
        id: "snacks-1",
        name: "HARIBO Gummi Candy, Share Size",
        price: 2.79,
        image: "/images/khadash.png",
        description: "HARIBO Gummi Candy, Share Size",
        category: "Snacks",
        weight: "5 oz",
        rating: {
          score: 4,
          count: 4,
        },
      },
      {
        id: "snacks-2",
        name: "Chester's Corn Snacks, Flamin' Hot Flavored, Fries",
        price: 2.99,
        image: "/images/khadash.png",
        description: "Chester's Corn Snacks, Flamin' Hot Flavored, Fries",
        category: "Snacks",
        weight: "5.25 oz",
        rating: {
          score: 0,
          count: 0,
        },
      },
      {
        id: "snacks-3",
        name: "NERDS Gummy Clusters Candy, Rainbow Crunchy",
        price: 6.79,
        image: "/images/khadash.png",
        description: "NERDS Gummy Clusters Candy, Rainbow Crunchy",
        category: "Snacks",
        weight: "8 oz • 4 sizes",
        rating: {
          score: 4.5,
          count: 416,
        },
      },
      {
        id: "snacks-4",
        name: "Werther's Original Hard Sugar Free Caramel Candy",
        price: 9.79,
        image: "/images/khadash.png",
        description: "Werther's Original Hard Sugar Free Caramel Candy",
        category: "Snacks",
        weight: "7.7 oz • 2 sizes",
        rating: {
          score: 0,
          count: 0,
        },
      },
      {
        id: "snacks-5",
        name: "Nice! Gummy Mango Peelable Candy",
        price: 1.99,
        image: "/images/khadash.png",
        description: "Nice! Gummy Mango Peelable Candy - 2.82 oz",
        category: "Snacks",
        weight: "2.82 oz",
        rating: {
          score: 0,
          count: 0,
        },
      },
      {
        id: "snacks-6",
        name: "Hostess Frosted Mini DONETTES Bag, Chocolate Breakfast",
        price: 4.79,
        image: "/images/khadash.png",
        description: "Hostess Frosted Mini DONETTES Bag, Chocolate Breakfast",
        category: "Snacks",
        weight: "10.75 oz",
        rating: {
          score: 4,
          count: 51,
        },
      },
      {
        id: "snacks-7",
        name: "Sour Punch Assorted Fruit Flavored Candy, Resealable Bag",
        price: 4.79,
        image: "/images/khadash.png",
        description: "Sour Punch Assorted Fruit Flavored Candy, Resealable Bag",
        category: "Snacks",
        weight: "9 oz",

        rating: {
          score: 4.5,
          count: 232,
        },
      },
      {
        id: "snacks-8",
        name: "Werther's Original Sugar Free, Chewy Caramels Candies",
        price: 9.79,
        image: "/images/khadash.png",
        description: "Werther's Original Sugar Free, Chewy Caramels Candies",
        category: "Snacks",
        weight: "7.7 oz",
        rating: {
          score: 0,
          count: 0,
        },
      },
    ],
  },
  {
    id: "fruit-juice",
    name: "Fruit juice",
    count: 41,
    products: [
      {
        id: "juice-1",
        name: "Orange Juice",
        price: 1.21,
        image: "/images/khadash.png",
        description: "Fresh squeezed orange juice",
        category: "Beverages",
        size: "12 oz",
      },
      {
        id: "juice-2",
        name: "Apple Juice",
        price: 3.99,
        image: "/images/khadash.png",
        description: "100% pure apple juice",
        category: "Beverages",
        size: "32 oz",
      },
      {
        id: "juice-3",
        name: "Pineapple Juice",
        price: 3.29,
        image: "/images/khadash.png",
        description: "Natural pineapple juice",
        category: "Beverages",
        size: "16 oz",
        rating: {
          score: 0,
          count: 0,
        },
      },
      {
        id: "juice-4",
        name: "Tangerine Juice",
        price: 2.79,
        image: "/images/khadash.png",
        description: "Fresh tangerine juice",
        category: "Beverages",
        size: "16 oz",
      },
      {
        id: "juice-5",
        name: "Orange Juice Premium",
        price: 5.59,
        image: "/images/khadash.png",
        description: "Premium pulp-free orange juice",
        category: "Beverages",
        size: "52 oz",
      },
      {
        id: "juice-6",
        name: "Mango Juice",
        price: 4.29,
        image: "/images/khadash.png",
        description: "100% pure mango juice",
        category: "Beverages",
        size: "52 oz",
      },
      {
        id: "juice-7",
        name: "Berry Juice",
        price: 4.29,
        image: "/images/khadash.png",
        description: "Mixed berry juice",
        category: "Beverages",
        size: "52 oz",
      },
      {
        id: "juice-8",
        name: "Peach Juice",
        price: 2.79,
        image: "/images/khadash.png",
        description: "Fresh peach juice",
        category: "Beverages",
        size: "11.5 oz",
      },
    ],
  },
];
