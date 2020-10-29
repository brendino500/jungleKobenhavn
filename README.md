# :herb: Jungle København

![homepage](https://i.ibb.co/mbdTqDJ/Screenshot-2020-10-26-at-17-35-00.png)

## :zap: Overview

- View my projet [here](#)

- After an intense coding bootcamp, I decided to challenge myself onto another project. I wanted to create an **ecommerce site in TypeScript** as I have been wanting to learn the language. I also really wanted to **push myself with Material UI** and explore other features it has to offer.

- In this project I also wanted to **strictly use React Hooks** and **learn and implement** the `useContext()` functionality, something of which was completely new to me.

- This is the closest I will ever get to owning a plant shop so it's a really fun project to build! :nerd_face:

---

## :abacus: Technologies

- TypeScript
- JavaScript
- React Hooks
- Material UI
- MongoDB
- Insomnia

---

## :stopwatch: Timeframe

- I wanted to give myself a deadline of 7 days. However, since this was my **first project with TypeScript _and_ React hooks and the `useContext()` functionality**, the project took a week longer.
- Total time: 14 days

## :microscope: Planning

- I **got in contact with Matt Goodwill, a UX Designer** to help me create the foundations of styling the site. **My brief was 'make it as minimalist and Danish as possible'.** Luckily, they go hand in hand. In return, Matt gave me **templates of hex colours and fonts**. I really **enjoyed the process of working with a designer** as this **enabled me to focus on the code** rather than the design, which at times I can be very distracted by.

<img src="https://i.ibb.co/Kwdm3bc/styling-example.jpg" alt="styling example" width="400" >
<img src="https://i.ibb.co/HV3VjpQ/colour-theme.png" alt="color-palette" width="400" >

<br />

- As I really wanted to be **strict with how I planned this project, I made wireframes to the best of my UX knowledge** (not a lot). I knew this was going to change as the project progressed, but I thought it would be better to have a basic idea rather than make it up on the spot.
  ![wireframes](https://i.ibb.co/MGKRmgQ/wireframes-jungle-kobenhavn.png)
  ![trello](https://i.ibb.co/F5GH232/trello-jungle-kobenhavn.png)
  I really like using Trello.

---

## :fire: Features

- As I wanted to push myself with Material, I tried to implement a lot of Material components I had not used before. One of the main components is the side drawer which also acts as the basket.

![side-drawer-cart](readmeAssets/demo-of-website.gif)

- I also pushed myself with **building up parent components with smaller children components.** This was the first project I had coded where **I really tried to exploit this React feature**. It's really satisfying nesting components into components and seeing smaller files, however this is where I realised that naming files are so important!

<img src="https://i.ibb.co/xXVLVtT/example-of-nesting3.png" alt="example-of-nesting" width="500" >

---

## :mountain_snow: Challenges

- This was my **first React project in TypeScript** (the backend was written in JavaScript). This was an **immense challenge** for me as I was only half way through a Udemy course. As I really put myself in the deep end, the process was a huge learning curve. I've never had to do so much Googling. I believe this was a good challenge as I forced myself to learn by doing. **There is still a lot to improve, but I feel that after this project I've got a stronger sense of understanding TypeScript.**

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

- In my previous project my team mate and I wanted to push ourselves with React Hooks. However, since we only had a 7 day deadline, we only wrote half of our code in Hooks and the other half Classical. Since then **I have read some React documentation and wanted to use `useContext()` functionality**. Again, I'm very **glad that I decided to use this as I feel like I have more of an understanding of React.**

- Using this functionality, I had to make a `providers` file with `Context` files. By making a `basketContext` file, this had allowed me manipulate the state for each `Route path`.

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

---

## :bulb: Sources

[Material UI](http://material-ui.com/)
[Ollie Bannister](https://github.com/brendino500/todo-list-app)
[React Context](https://reactjs.org/docs/context.html)
[Root Houseplants](https://www.root-houseplants.com/)
[House of Kojo](https://www.houseofkojo.com/)
[London House Plants](https://www.londonhouseplants.com/)
