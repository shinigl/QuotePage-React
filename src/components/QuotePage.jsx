import Quotes from "./Quotes";
const data = [
    { quote: "Food is symbolic of love when words are inadequate.", author: "Alan D. Wolfelt" },
    { quote: "You don’t have to cook fancy or complicated masterpieces – just good food from fresh ingredients.", author: "Julia Child" },
    { quote: "There is no sincerer love than the love of food.", author: "George Bernard Shaw" },
    { quote: "People who love to eat are always the best people.", author: "Julia Child" },
    { quote: "Life is uncertain. Eat dessert first.", author: "Ernestine Ulmer" },
    { quote: "Let food be thy medicine and medicine be thy food.", author: "Hippocrates" },
    { quote: "Good food is the foundation of genuine happiness.", author: "Augustus Escoffier" },
    { quote: "One cannot think well, love well, sleep well, if one has not dined well.", author: "Virginia Woolf" },
    { quote: "Food for the body is not enough. There must be food for the soul.", author: "Dorothy Day" },
    { quote: "Eating is a necessity, but cooking is an art.", author: "Richie" }
  ];


  const QuotePage = () =>{
    return(
        <>
        <Quotes quotes={data}/>
        </>
    )
  }

  export default QuotePage ;