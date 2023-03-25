import React ,{useState,useEffect}from 'react'

  const Testing2=()=> {



  

  const [isSelected, setIsselected] = useState(true);
  const [data, setData] = useState([[]]);
  const [options,setoptions]=useState([])
  
//   const [heading, setHeading] = useState([]);
//   const [options, setOptions] = useState([[]]);

const addRow = () => {
    console.log("addrow",data.length)
   if (data.length-1 === 0)
    {
        const len = heading.length;
    const bet = data.length + 1;
  const t = [[]];
  for (var i = 0; i < bet; i++) {
    var tt = [len];
    for (var j = 0; j < len; j++) {
      if (j !== 0) {
        tt[j] = "-";
      } else {
        tt[j] = "";
      }
    }
    console.log("addrow",data.length,tt);
    t[i] = tt;
    console.log("2d",t)
  }
  setData(t);
}
  else {
    const newData = [...data];
    console.log("one",newData)
    newData.push(Array(data[0].length).fill("-"));
    newData[newData.length-1][0]=""
    console.log("two",newData)
    setData(newData);
};
  };


// setoptions(x)
const arr = [];
for (let i = 0; i < options.length; i++) {
  arr.push(i);
}

  useEffect(() => {
    // This code will run only once when the component first renders
    const x = [
  ['Apple', 5],
  ['Banana', 10],
  ['Cherry', 15],
  ['Date', 20],
  ['Elderberry', 25],
  ['Fig', 30],
  ['Grape', 35],
  ['Honeydew', 40],
  ['Kiwi', 45],
  ['Lemon', 50],
];
    setoptions(x);
  }, []);



const heading = [
  { head1: "Temperature", head2: "Humidity", unit: "Celsius" },
  { head1: "Pressure", head2: "Flow Rate", unit: "PSI" },
  { head1: "Voltage", head2: "Current", unit: "Ampere" },
  { head1: "Frequency", head2: "Power Factor", unit: "Hertz" },
  { head1: "Velocity", head2: "Acceleration", unit: "m/s²" },
  { head1: "Distance", head2: "Time", unit: "m/s" }
];







// const hhhh=(a,b,c)=>{
//      const newoptions= removeRowByFirstElement(options,a[0]);
//      console.log("newoptions",newoptions)
//      setoptions(newoptions);
//      const newData = [...data];
//      newData[b][c] = a[1];
//      setData(newData);
     
//   }
 
    return (
      <div className="finalformcreate-container">
        <label className="finalformcreate-label">
          Reorder Columns for Final Report
        </label>
       
      </div>
    );
  }

export default Testing2