import {useState} from 'react';
// usestate is only used inside component
// usestate is always used in the top level function 
import './App.css';
import Banner from './Component/Banner/Banner.js';
import TabMenu from './Component/Tab_menu.js';
import {Services} from './Component/Service_data.js';
import Foodbutton from './Component/Foodbutton';
import { Foodimages } from './Component/Foodimage.js';

// import Education from './edu.jpeg';

function App() {
// badalti hui value aur badalne k baad vali value
  const [changedText,setChangedText] = useState('Web_Dev')
  const [ChangedImage, setChangedImage] = useState('Indian')

  function foodclick(ser) {
    console.log("Printing food image");
    setChangedImage(ser);
  }
    function handleClick(services){
      console.log(services);
      setChangedText(services);
    }

  return (
    <div>
      <div id="nav">
        <h1>SJCEM</h1>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Course</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
      </div>

      <Banner/>

      <section>
        <div id="service_tabs"> 
          <TabMenu command={()=> handleClick('Web_Dev')}>Web_Dev</TabMenu>
          <TabMenu command={()=> handleClick('App_Dev')}>App_Dev</TabMenu>
          <TabMenu command={()=> handleClick('Cloud')}>Cloud</TabMenu>
          <TabMenu command={()=> handleClick('IOT')}>IOT</TabMenu>
        </div>


        <div class="ServiceDetailBox">
          <div id="service-head">{Services[changedText].ServiceName}</div>
          <div id="service-count">Total Project- {Services[changedText].Count}</div>
          <div id="service-body">{Services[changedText].Description}</div>
        </div>

        {/* <div class="row">

          <div class="big">
            <div class="button">
            <button>Sports</button>
            <button>Science</button>
            <button>Arts</button>
            <button>Technology</button>

            </div>
          <div class="small" >
          <image src={Education} alt="eduction"/>   
           </div>
            
            </div> */}
        {/* </div> */}

      </section>

      <section>
        <div id='food'>
          <div id='food-choice'>
            <Foodbutton com={() => foodclick("Indian")}>Science</Foodbutton>
            <Foodbutton com={() => foodclick("Italian")}>Arts</Foodbutton>
            <Foodbutton com={() => foodclick("Chinese")}>Commerce</Foodbutton>
            <Foodbutton com={() => foodclick("Korean")}>sports</Foodbutton>
          </div>
          <div id='food-choice-image'>
            {Foodimages[ChangedImage].Image1}
          </div>
        </div>
      </section>


      </div>
  );
}
export default App;