export interface houseInterf {
  id: string;
  title: string;
  location: string;
  image: any;
  details: string;
  price: string;
  interiors: any[];
}

const houses = [
  {
    id: "1",
    title: "Entire guest suite",
    location: "East Side Cedar Cottage Toronto",
    image: require("../assets/house1.jpg"),
    details: `This building is located in the Oliver area, withing walking distance of shops...`,
    price: "8 750 000 DA",
    interiors: [
      require("../assets/interior1.jpg"),
      require("../assets/interior2.jpg"),
      require("../assets/interior3.jpg"),
    ],
  },
  {
    id: "2",
    title: "Private room in house",
    location: "Down town house suite Toronto",
    image: require("../assets/house2.jpg"),
    details: `This building is located in the Oliver area, withing walking distance of shops...`,
    price: "9 770 000 DA",
    interiors: [
      require("../assets/interior1.jpg"),
      require("../assets/interior2.jpg"),
      require("../assets/interior3.jpg"),
    ],
  },
  {
    id: "3",
    title: "Entire apartment",
    location: "3Mins to Skytrain/Garden/Stadium/100% Toronto",
    image: require("../assets/house3.jpg"),
    details: `This building is located in the Oliver area, withing walking distance of shops...`,
    price: "7 870 000 DA",
    interiors: [
      require("../assets/interior1.jpg"),
      require("../assets/interior2.jpg"),
      require("../assets/interior3.jpg"),
    ],
  },
  {
    id: "4",
    title: "Private room in apartment",
    location: "Small room in cozy DT Vancouver apartment! Toronto",
    image: require("../assets/house4.jpg"),
    details: `This building is located in the Oliver area, withing walking distance of shops...`,
    price: "9 570 000 DA",
    interiors: [
      require("../assets/interior1.jpg"),
      require("../assets/interior2.jpg"),
      require("../assets/interior3.jpg"),
    ],
  },
];
export const categoryList = ["Popular", "Recommended", "Nearest"];
export const optionsList = [
  { title: "Buy a Home", img: require("../assets/house1.jpg") },
  { title: "Rent a Home", img: require("../assets/house2.jpg") },
];
export default houses;
