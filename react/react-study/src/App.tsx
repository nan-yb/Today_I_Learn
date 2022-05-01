import React from 'react';
import { Route } from "react-router-dom";
import ItemListContainer from "./containers/ItemListContainer";
import ItemRegisterContainer from "./containers/ItemRegisterContainer";
import ItemModifyContainer from "./containers/ItemModifyContainer";
import ItemReadContainer from "./containers/ItemReadContainer";

export interface Item {
  readonly itemId : string ; 
  readonly itemName : string ; 
  readonly price : number ; 
  readonly description : string;
}

function App() {
  return (
    <>
      <Route component={ItemListContainer} path="/" exact />
      <Route component={ItemRegisterContainer} path="/create" />
      <Route component={ItemModifyContainer} path="/edit/:itemId" />
      <Route component={ItemReadContainer} path="/read/:itemId" />
    </>
  );
}

export default App;
