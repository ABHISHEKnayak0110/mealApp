
const  filterOption =[
    {    filterName : "By Seasons",
         options :[
            {
             name : "Summer",
             quantity : 2
            },
            {
             name : "Winter",
             quantity : 9
            },
            {
             name : "Spring",
             quantity : 8
            },{
             name : "Rainy",
             quantity : 11
            }
          ]
    },
    {    filterName : "By Dietary Preference",
    options :[
       {
        name : "Egg Free",
        quantity : 3
       },
       {
        name : "Healthy",
        quantity : 13
       },
       {
        name : "Dairy Free",
        quantity : 14
       }
     ]
},
 {    filterName : "By Meal",
options :[
   {
    name : "Breakfast",
    quantity : 6
   },
   {
    name : "Dessert",
    quantity : 10
   },
   {
    name : "Dinner",
    quantity : 6
   },{
    name : "Snacks",
    quantity : 8
   }
 ]
},
{    filterName : "Sweet Things",
options :[
   {
    name : "Fruit Dessert",
    quantity : 3
   },
   {
    name : "Chocolate",
    quantity : 9
   },
   {
    name : "Cakes",
    quantity : 12
   },{
    name : "Ice Cream",
    quantity : 6
   }
 ]
}
]

const allRecipy=  [
    {
      id: 1,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 1 Winter Egg Free Breakfast Fruit Dessert.',
      tag: 'popular',
      "By Seasons": 'Winter',
      "By Dietary Preference": 'Egg Free',
      "By Meal": 'Breakfast',
      "Sweet Things": 'Fruit Dessert'
    },
    {
      id: 2,
      imgUrl: "https://media.gettyimages.com/id/157472912/photo/ice-cream-composition-on-a-bowl.jpg?s=612x612&w=gi&k=20&c=AniWX1OhaarUxCkgjUoKiA3bKVllK0upCylW6Z0PCMQ=",
      description: 'Dummy description for food item 2 Rainy Egg Free Snacks Ice Cream.',
      tag: 'tag-2',
      "By Seasons": 'Rainy',
      "By Dietary Preference": 'Egg Free',
      "By Meal": 'Snacks',
      "Sweet Things": 'Ice Cream'
    },
    {
      id: 3,
      imgUrl: "https://elavegan.com/wp-content/uploads/2023/01/homemade-chocolate-bars.jpg",
      description: 'Dummy description for food item 3 Rainy Healthy Dessert Chocolate.',
      tag: 'tag-3',
      "By Seasons": 'Rainy',
      "By Dietary Preference": 'Healthy',
      "By Meal": 'Dessert',
      "Sweet Things": 'Chocolate'
    },
    {
      id: 4,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 4 Rainy Healthy Dessert Chocolate.',
      tag: 'tag-4',
      "By Seasons": 'Rainy',
      "By Dietary Preference": 'Healthy',
      "By Meal": 'Dessert',
      "Sweet Things": 'Chocolate'
    },
    {
      id: 5,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 5 Spring Dairy Free Breakfast Ice Cream.',
      tag: 'tag-5',
      "By Seasons": 'Spring',
      "By Dietary Preference": 'Dairy Free',
      "By Meal": 'Breakfast',
      "Sweet Things": 'Ice Cream'
    },
    {
      id: 6,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 6 Summer Healthy Breakfast Cakes.',
      tag: 'tag-6',
      "By Seasons": 'Summer',
      "By Dietary Preference": 'Healthy',
      "By Meal": 'Breakfast',
      "Sweet Things": 'Cakes'
    },
    {
      id: 7,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 7 Winter Healthy Dessert Cakes.',
      tag: 'tag-7',
      "By Seasons": 'Winter',
      "By Dietary Preference": 'Healthy',
      "By Meal": 'Dessert',
      "Sweet Things": 'Cakes'
    },
    {
      id: 8,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 8 Spring Dairy Free Dinner Cakes.',
      tag: 'tag-8',
      "By Seasons": 'Spring',
      "By Dietary Preference": 'Dairy Free',
      "By Meal": 'Dinner',
      "Sweet Things": 'Cakes'
    },
    {
      id: 9,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 9 Winter Dairy Free Dinner Cakes.',
      tag: 'tag-9',
      "By Seasons": 'Winter',
      "By Dietary Preference": 'Dairy Free',
      "By Meal": 'Dinner',
      "Sweet Things": 'Cakes'
    },
    {
      id: 10,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 10 Winter Healthy Dinner Cakes.',
      tag: 'tag-10',
      "By Seasons": 'Winter',
      "By Dietary Preference": 'Healthy',
      "By Meal": 'Dinner',
      "Sweet Things": 'Cakes'
    },
    {
      id: 11,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 11 Winter Dairy Free Dessert Ice Cream.',
      tag: 'tag-11',
      "By Seasons": 'Winter',
      "By Dietary Preference": 'Dairy Free',
      "By Meal": 'Dessert',
      "Sweet Things": 'Ice Cream'
    },
    {
      id: 12,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 12 Spring Dairy Free Dessert Ice Cream.',
      tag: 'tag-12',
      "By Seasons": 'Spring',
      "By Dietary Preference": 'Dairy Free',
      "By Meal": 'Dessert',
      "Sweet Things": 'Ice Cream'
    },
    {
      id: 13,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 13 Spring Healthy Breakfast Cakes.',
      tag: 'tag-13',
      "By Seasons": 'Spring',
      "By Dietary Preference": 'Healthy',
      "By Meal": 'Breakfast',
      "Sweet Things": 'Cakes'
    },
    {
      id: 14,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 14 Rainy Dairy Free Dessert Chocolate.',
      tag: 'tag-14',
      "By Seasons": 'Rainy',
      "By Dietary Preference": 'Dairy Free',
      "By Meal": 'Dessert',
      "Sweet Things": 'Chocolate'
    },
    {
      id: 15,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 15 Winter Healthy Dessert Cakes.',
      tag: 'tag-15',
      "By Seasons": 'Winter',
      "By Dietary Preference": 'Healthy',
      "By Meal": 'Dessert',
      "Sweet Things": 'Cakes'
    },
    {
      id: 16,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 16 Winter Dairy Free Snacks Chocolate.',
      tag: 'tag-16',
      "By Seasons": 'Winter',
      "By Dietary Preference": 'Dairy Free',
      "By Meal": 'Snacks',
      "Sweet Things": 'Chocolate'
    },
    {
      id: 17,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 17 Rainy Dairy Free Dinner Cakes.',
      tag: 'tag-17',
      "By Seasons": 'Rainy',
      "By Dietary Preference": 'Dairy Free',
      "By Meal": 'Dinner',
      "Sweet Things": 'Cakes'
    },
    {
      id: 18,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 18 Rainy Healthy Dessert Cakes.',
      tag: 'tag-18',
      "By Seasons": 'Rainy',
      "By Dietary Preference": 'Healthy',
      "By Meal": 'Dessert',
      "Sweet Things": 'Cakes'
    },
    {
      id: 19,
      imgUrl: "https://hips.hearstapps.com/hmg-prod/images/cheesecake-cupcakes-1649185920.jpg",
      description: 'Dummy description for food item 19 Spring Healthy Breakfast Fruit Dessert.',
      tag: 'tag-19',
      "By Seasons": 'Spring',
      "By Dietary Preference": 'Healthy',
      "By Meal": 'Breakfast',
      "Sweet Things": 'Fruit Dessert'
    },
    {
      id: 20,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 20 Summer Healthy Snacks Ice Cream.',
      tag: 'tag-20',
      "By Seasons": 'Summer',
      "By Dietary Preference": 'Healthy',
      "By Meal": 'Snacks',
      "Sweet Things": 'Ice Cream'
    },
    {
      id: 21,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 21 Rainy Dairy Free Snacks Chocolate.',
      tag: 'tag-21',
      "By Seasons": 'Rainy',
      "By Dietary Preference": 'Dairy Free',
      "By Meal": 'Snacks',
      "Sweet Things": 'Chocolate'
    },
    {
      id: 22,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 22 Spring Dairy Free Dinner Chocolate.',
      tag: 'tag-22',
      "By Seasons": 'Spring',
      "By Dietary Preference": 'Dairy Free',
      "By Meal": 'Dinner',
      "Sweet Things": 'Chocolate'
    },
    {
      id: 23,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 23 Spring Dairy Free Snacks Cakes.',
      tag: 'tag-23',
      "By Seasons": 'Spring',
      "By Dietary Preference": 'Dairy Free',
      "By Meal": 'Snacks',
      "Sweet Things": 'Cakes'
    },
    {
      id: 24,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 24 Winter Healthy Snacks Fruit Dessert.',
      tag: 'tag-24',
      "By Seasons": 'Winter',
      "By Dietary Preference": 'Healthy',
      "By Meal": 'Snacks',
      "Sweet Things": 'Fruit Dessert'
    },
    {
      id: 25,
      imgUrl: 'https://st4.depositphotos.com/10614052/25239/i/600/depositphotos_252391082-stock-photo-sweet-chocolate-cake-on-wooden.jpg',
      description: 'Dummy description for food item 25 Rainy Dairy Free Dinner Cakes.',
      tag: 'tag-25',
      "By Seasons": 'Rainy',
      "By Dietary Preference": 'Dairy Free',
      "By Meal": 'Dinner',
      "Sweet Things": 'Cakes'
    },
    {
      id: 26,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 26 Winter Dairy Free Dessert Ice Cream.',
      tag: 'tag-26',
      "By Seasons": 'Winter',
      "By Dietary Preference": 'Dairy Free',
      "By Meal": 'Dessert',
      "Sweet Things": 'Ice Cream'
    },
    {
      id: 27,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 27 Rainy Healthy Snacks Cakes.',
      tag: 'tag-27',
      "By Seasons": 'Rainy',
      "By Dietary Preference": 'Healthy',
      "By Meal": 'Snacks',
      "Sweet Things": 'Cakes'
    },
    {
      id: 28,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 28 Spring Egg Free Dessert Chocolate.',
      tag: 'tag-28',
      "By Seasons": 'Spring',
      "By Dietary Preference": 'Egg Free',
      "By Meal": 'Dessert',
      "Sweet Things": 'Chocolate'
    },
    {
      id: 29,
      imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      description: 'Dummy description for food item 29 Rainy Dairy Free Breakfast Chocolate.',
      tag: 'tag-29',
      "By Seasons": 'Rainy',
      "By Dietary Preference": 'Dairy Free',
      "By Meal": 'Breakfast',
      "Sweet Things": 'Chocolate'
    },
    {   id: 30,
        imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
        description: 'Dummy description for food item 30 Rainy Healthy Snacks Chocolate.',
        tag: 'tag-30',
        "By Seasons": 'Rainy',
        "By Dietary Preference": 'Healthy',
        "By Meal": 'Snacks',
        "Sweet Things": 'Chocolate'
    }
]

// const dummyData = [];

// let idCounter = 1;

// // Generate 30 data points
// for (let i = 1; i <= 30; i++) {
//   const random"By Seasons" = getRandomOption("By "By Seasons"s");
//   const random"By Dietary Preference" = getRandomOption("By Dietary Preference");
//   const random"By Meal" = getRandomOption("By "By Meal"");
//   const randomSweetThing = getRandomOption("Sweet Things");

//   const data = {
//     "id": idCounter,
//     "imgUrl": `"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"${i}.jpg`,
//     "description": `Dummy description for food item ${i} ${random"By Seasons"} ${random"By Dietary Preference"} ${random"By Meal"} ${randomSweetThing}.`,
//     "tag": `tag-${i}`,
//     ""By Seasons"": random"By Seasons",
//     ""By Dietary Preference"": random"By Dietary Preference",
//     ""By Meal"": random"By Meal",
//     ""Sweet Things"": randomSweetThing
//   };

//   dummyData.push(data);
//   idCounter++;
// }
// console.log("hello" , dummyData)

// function getRandomOption(filterName: string) {
//   const options :any = filterOption.find(option => option.filterName === filterName);
//   const randomIndex = Math.floor(Math.random() * options.options.length);
//   return options.options[randomIndex].name;
// }


  


export {filterOption ,allRecipy}