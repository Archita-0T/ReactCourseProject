import "./App.css";
import { data, api } from "./data.js";
import { Cards } from "./components/Cards";
import { Spinner } from "./components/Spinner";
import { Filter } from "./components/Filter";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";


function App() {
  const [category,setcategory] = useState(data[0].title);
  const [courses, setcourses] = useState(null);
  const [loading, setloading] = useState(true);
  const fetchdata = async () => {
    setloading(true);
    let res = await fetch(api);
    let output = await res.json();
    setcourses(output.data);
    setloading(false);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="big-box">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter data={data} key={data.id} category={category} setcategory={setcategory} />
      </div>
      <div>
         {loading ? <Spinner/> : <Cards courses={courses} category={category}/>}
       </div>
    </div>
  );
}

export default App;