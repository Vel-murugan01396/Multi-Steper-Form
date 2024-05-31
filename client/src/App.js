// import Timer from "./Timer";
// import MultiForm from "./MultiForm";

import Main from "./Main";
import {BrowserRouter,Routes,Route} from "react-router-dom"

// import Property from "./Property";

// import Demo from "./Demo";
import  "./App.css"
import Detail from "./Detail";



function App() {
  return (<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Main/>}></Route>
    <Route path="/property/:id" element={<Detail/>}></Route>
  </Routes>
  </BrowserRouter>
{/* <Timer/> */}
{/* <MultiForm/> */}
{/* <Demo/> */}
{/* <Property/> */}
{/* <div>
  <h2>Property List</h2>
<Main/>
</div> */}

  </>
   
  );
}

export default App;
