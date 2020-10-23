import React, {createContext } from 'react'

export const BasketContext = createContext([[], () => { }])

export const BasketProvider = (props: any) => {
  const [basketState, setBasketState] = React.useState([])

  return (
    <BasketContext.Provider value={[ basketState, setBasketState ]} {...props} />
  )
}