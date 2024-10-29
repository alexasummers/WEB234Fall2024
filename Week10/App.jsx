import { useState } from 'react';

function HowManyTrees() {
  const [trees, setTrees] = useState(0);

  return (
    <>
	<h1> How many trees? {trees} trees.</h1>
      <button onClick={() => {
        setTrees(trees + 1);
        setTrees(trees + 1);
        setTrees(trees + 1);
      }}>+3</button>
    </>
  )
}

function HowManyCats() {
  const [cat, setCat] = useState(0);

  return (
    <>
	  <h1>How many cats? {cat} cats.</h1>
      <button onClick={() => {
        setCat(cat + 5);
        alert(cat);
      }}>+5</button>
    </>
  )
}

function HowManyShoes() {
  const [shoe, setShoe] = useState(0);

  return (
    <>
      <h1>How many shoes? {shoe} shoes.</h1>
      <button onClick={() => {
        setShoe(shoe + 5);
        setTimeout(() => {
          alert(shoe);
        }, 3000);
      }}>+5</button>
    </>
  )
}


export default function App() {
	return(
	  <>
		  <HowManyTrees />
		  <HowManyCats />
		  <HowManyShoes />
    </>
	)
}
