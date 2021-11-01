import React from "react";
import Footer from "./Components/footer/Footer";
import Header from "./Components/Header/Header";
import Todo from "./Components/ToDo";





class App extends React.Component {
constructor(props){
    super(props)
}
      
render() {
    return (
        <>
            <Header />
            <Todo />
            <Footer />
        </>
    )
}
}


  export default App
  