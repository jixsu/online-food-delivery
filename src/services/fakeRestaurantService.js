const restaurants = [
  {
    name: "McDonald's",
    cuisine: [
      {
        _id: "779a1bed-9ccf-4a8c-96e6-43c591e6375a",
        cuisine: "Burgers",
      },
      {
        _id: "67cfb7fd-24ef-460b-9ff6-92c482be6844",
        cuisine: "American",
      },
      {
        _id: "0ada2278-e925-497c-aec1-755f3501bfd8",
        cuisine: "Fast Food",
      },
    ],
    address: {
      streetNumber: 1,
      streetName: "Fake1 Street",
      city: "Toronto",
      country: "Canada",
      postalCode: "X5X5X5",
    },
    menuCategories: ["Burgers", "Fries", "Combos", "Snacks", "Drinks"],
    menu: [
      {
        _id: "c50abc44-4148-4b73-bb02-f764fc0b819f",
        item: "Junior Chicken",
        category: "Burgers",
        options: {
          sizes: {
            oneSize: {
              price: 1.99,
            },
          },
          addOns: [],
        },
      },
      {
        _id: "3f264aeb-c1a5-4ab3-b3ff-3825f1fd4f41",
        item: "Fries",
        category: "Fries",
        options: {
          sizes: {
            small: {
              price: 1.99,
            },
            medium: {
              price: 2.49,
            },
            large: {
              price: 2.99,
            },
          },
          addOns: [],
        },
      },
    ],
  },
  {
    name: "Pizzeria",
    cuisine: [
      {
        _id: "3a6bc57d-4ba3-4bad-89b6-da10f72a9eb1",
        cuisine: "Italian",
      },
      {
        _id: "ac385f54-855d-489d-81ce-c897e63533ff",
        cuisine: "Pizza",
      },
      {
        _id: "0ada2278-e925-497c-aec1-755f3501bfd8",
        cuisine: "Fast Food",
      },
    ],
    address: {
      streetNumber: 1,
      streetName: "Fake2 Street",
      city: "Toronto",
      country: "Canada",
      postalCode: "X1X1X1",
    },
    menuCategories: ["Pizza", "Appetizers", "Drinks"],
    menu: [
      {
        _id: "18c72b9f-942b-4350-8225-9b9ad2718bfe",
        item: "Pepperoni Pizza",
        category: "Pizza",
        options: {
          sizes: {
            medium: {
              price: 12.99,
            },
            large: {
              price: 15.99,
            },
          },
          addOns: ["Extra Cheese", "Extra Pepperoni"],
        },
      },
      {
        _id: "139b229d-3347-45ff-8750-443e99f652e3",
        item: "Coke",
        category: "Drinks",
        options: {
          sizes: {
            oneSize: {
              price: 1.99,
            },
          },
          addOns: [],
        },
      },
    ],
  },
];

export function getRestaurants() {
  return restaurants;
}
