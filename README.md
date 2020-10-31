# :herb: Jungle København

<a href="https://jungle-kobenhavn.herokuapp.com/" target="_blank" rel="noopener noreferrer" >
<img src="https://i.ibb.co/mbdTqDJ/Screenshot-2020-10-26-at-17-35-00.png" alt="homepage" />
</a>

## :zap: Overview

- View my project [here](https://jungle-kobenhavn.herokuapp.com/)

- After an intense coding bootcamp, I decided to challenge myself onto another project. I wanted to create an **ecommerce site in TypeScript** as I have been wanting to learn the language. I also really wanted to **push myself with Material UI** and explore other features it has to offer.

- In this project I made myself **strictly use React Hooks** and also to **learn and implement** the `useContext()` functionality, something of which was completely new to me.

- This is the closest I will ever get to owning a plant shop so it's a really fun project to build! :nerd_face:

![walkthrough](readmeAssets/jk-walkthrough.gif)

---

## :abacus: Technologies and Tools

- TypeScript
- JavaScript
- React Hooks
- Material UI
- MongoDB
- Insomnia

---

## :stopwatch: Timeframe

- My original deadline was 7 days. However, as **I was new to TypeScript and the `useContext()` functionality**,the project took a week longer.
- Total time: 14 days

## :microscope: Planning

- I **got in contact with Matt Goodwill, a UX Designer** to help me create the foundations of styling the site. **My brief was 'make it as minimalist and Danish as possible'.** Luckily, they go hand in hand. In return, Matt gave me **templates of hex colours and fonts**. I really **enjoyed the process of working with a designer** as this **enabled me to focus on the code** rather than the design which, given my artistic background, I always want to invest time in.

<p float="left">
<img src="https://i.ibb.co/Kwdm3bc/styling-example.jpg" alt="styling example" width="375" >
<img src="https://i.ibb.co/HV3VjpQ/colour-theme.png" alt="color-palette" width="375" >
</p>

<br />

- Since I was **strict with how I planned this project, I made wireframes to the best of my UX knowledge**. I knew the design was going to change as the project progressed as there is always something missed, but I thought it would be better to have a basic idea rather than make it up on the spot.

- Upon completion of the site, I was very happy to see that my final site was very close to the wireframes.
  ![wireframes](https://i.ibb.co/MGKRmgQ/wireframes-jungle-kobenhavn.png)
  ![trello](https://i.ibb.co/F5GH232/trello-jungle-kobenhavn.png)
  I really like using Trello.

---

## :fire: Features

- Having used **Material UI in the past and reading through the Component APIs**, I had realised how much it has to offer. One of my aims in this project was to **use some Material components I had not used before**. The main component I took was the side drawer which also acts as the basket.

![side-drawer-cart](readmeAssets/demo-of-website.gif)

- I also pushed myself with **building up parent components with smaller children components.** This was the first project I had coded where **I really tried to exploit this React feature**. It's really satisfying nesting components into components and seeing smaller files, however this is where I realised that naming the tsx files are so important!
- Doing this also allowed me to reuse child components within the context of different parents (see use of PlantCardCheckout).

<img src="https://i.ibb.co/xXVLVtT/example-of-nesting3.png" alt="example-of-nesting" width="500" >

- To make this website feel like a real shop, I added **two locations which renders on MapBox.**
  <img src="https://i.ibb.co/zJ8XpyG/Screenshot-2020-10-29-at-20-00-19.png" alt="Screenshot-2020-10-29-at-20-00-19" />

---

## :mountain_snow: Challenges

- As previously mentioned, this was my **first React project in TypeScript** (the backend was written in JavaScript). This was an **immense challenge** for me as I was only half way through a TypeScript Udemy course. I threw myself in the deep end and the process was a **huge learning curve.** I've never had to do so much Googling before! :see_no_evil: I believe this was a good challenge as I forced myself to learn by doing. **There is still a lot to improve, but I feel that after this project I've gained a stronger sense of understanding TypeScript.**

```
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (
      event.type === "keydown" &&
      (event as React.KeyboardEvent).key === "Enter"
    ) {
      props.history.push(`/plants?search=${search}`);
    }
  };

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
```

- In my previous project my team mate and I wanted to use React Hooks. However, since we only had a 7 day deadline we only wrote half of our code in Hooks and the other half Classical. Since then **I have read some React documentation and wanted to use `useContext()` functionality**. Again, I'm very **glad that I decided to use this as I feel like I have more of an understanding of React.**

- Using this functionality I created a `BasketContext` file that exports both a `Context` and a `Provider`, allowing me to access and modify the basket state throughout the application without having to pass it to every child via props.
- It's worth noting that I did the same separately for the `ShippingContext` which is used to store the delivery cost. If I were to continue with this project, I would combine these two contexts into a single `GlobalStateContext` as the current implementation of a new context per state value doesn't scale.

```import React, { createContext } from "react";

export const BasketContext = createContext([[], () => {}]);

export const BasketProvider = (props: any) => {
const [basketState, setBasketState] = React.useState([]);

return (
<BasketContext.Provider value={[basketState, setBasketState]} {...props} />
);
};
```

## :building_construction: Future Development

- I want to really **hone in my skills with Material**. I realised at the end of my project that **I wasn't using it to it's full extent.** A lot of my styling is defined in the component files which can make the file very long. **In future I will be strict with the `ThemeProvider` component** to store all the CSS in one file and import it to component file so it will therefore be **smaller and easier to read.**

- **Once I learn and get more comfortable with TypeScript I will probably change some of the inevitable mistakes that I have made.** (lol)

---

## :seedling: Screenshots

  <img src="https://i.ibb.co/jhM7PQ9/example-layout1.png" alt="example-layout" />
  <img src="https://i.ibb.co/nmcTPxd/example-layout2.png" alt="example-layout" />

<p float="left">
  <img src="https://i.ibb.co/C9J7hbh/scrollable-drawer.png" alt="scrollable-drawer" />
  <img src="https://i.ibb.co/CM9dDVT/plant-card.png" alt="plant-card" />
    <img src="https://i.ibb.co/1LdgjVV/plant-grid.png" alt="plant-index" />
</p>

## :bulb: Sources

[Material UI](http://material-ui.com/)
<br />
[Ollie Bannister](https://github.com/brendino500/todo-list-app)
<br />
[React Context](https://reactjs.org/docs/context.html)
<br />
[Root Houseplants](https://www.root-houseplants.com/)
<br />
[House of Kojo](https://www.houseofkojo.com/)
<br />
[London House Plants](https://www.londonhouseplants.com/)
