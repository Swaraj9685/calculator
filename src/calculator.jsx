// import { useState } from "react";
// import "./calculator.css";

import { useState } from "react";

// export default function Calculator() {
//   const [value, setValue] = useState("");

//   const Add = v => setValue(value + v);

//   const calc = () => {
//     try {
//       setValue(eval(value).toString());
//     } catch {
//       setValue("Error");
//     }
//   };

//   const clear = () => setValue("");

//   return (
//     <div className="calc-wrapper">
//       <div className="calculator">
//         {/* SCREEN */}
//         <div className="calc-screen">{value || "0"}</div>

//         {/* BUTTONS */}
//         <div className="calc-buttons">
//           <button className="btn red" onClick={clear}>
//             AC
//           </button>
//           <button className="btn blue" onClick={() => Add("%")}>
//             %
//           </button>
//           <button className="btn blue" onClick={() => Add("*")}>
//             ×
//           </button>
//           <button className="btn blue" onClick={() => Add("/")}>
//             ÷
//           </button>

//           <button className="btn" onClick={() => Add("7")}>
//             7
//           </button>
//           <button className="btn" onClick={() => Add("8")}>
//             8
//           </button>
//           <button className="btn" onClick={() => Add("9")}>
//             9
//           </button>
//           <button className="btn blue" onClick={() => Add("-")}>
//             −
//           </button>

//           <button className="btn" onClick={() => Add("4")}>
//             4
//           </button>
//           <button className="btn" onClick={() => Add("5")}>
//             5
//           </button>
//           <button className="btn" onClick={() => Add("6")}>
//             6
//           </button>
//           <button className="btn blue" onClick={() => Add("+")}>
//             +
//           </button>

//           <button className="btn" onClick={() => Add("1")}>
//             1
//           </button>
//           <button className="btn" onClick={() => Add("2")}>
//             2
//           </button>
//           <button className="btn" onClick={() => Add("3")}>
//             3
//           </button>

//           {/* = BUTTON (LONG) */}
//           <button className="btn equal" onClick={calc}>
//             =
//           </button>

//           <button className="btn zero" onClick={() => Add("0")}>
//             0
//           </button>
//           <button className="btn" onClick={() => Add(".")}>
//             .
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }
import "./calculator.css";
export default function Calculator() {
  const [value, setValue] = useState("");

  const Add = v => setValue( prev =>  prev + v);

   const calc = () => {
    try {
      setValue(eval(value).toString());
    } catch (error) {
      setValue("Error");
    }
  };

  const clear = () => setValue("");
  
  const backspace = ()=>{
    setValue (prev =>  prev.slice(0,-1))
  }

  return (
    <>
      <div className=" calc-wrapper">
        <div className="calculator">
          <div className="calc-screen"> {value || "0"}</div>
          <div className="calc-btns">
            <button className="btn red" onClick={clear}>
              AC
            </button>

            <button className="btn blue" onClick={() => Add("%")}>
              %
            </button>

            <button className="btn blue" onClick={() => Add("*")}>
              *
            </button>

            <button className="btn blue " onClick={() => Add("/")}>
              /
            </button>

            <button className="btn " onClick={() => Add("7")}>
              7
            </button>

            <button className="btn " onClick={() => Add("8")}>
              8
            </button>

            <button className="btn " onClick={() => Add("9")}>
              9
            </button>

            <button className="btn blue" onClick={() => Add("+")}>
              +
            </button>

            <button className="btn " onClick={() => Add("4")}>
              4
            </button>

            <button className="btn " onClick={() => Add("5")}>
              5
            </button>

            <button className="btn " onClick={() => Add("6")}>
              6
            </button>

            <button className="btn blue " onClick={() => Add("-")}>
              -
            </button>

            <button className="btn" onClick={() => Add("1")}>
              1
            </button>

            <button className="btn " onClick={() => Add("2")}>
              2
            </button>

            <button className="btn " onClick={() => Add("3")}>
              3
            </button>

            <button className="btn red " onClick={backspace}>
              Del
            </button>

            <button className="btn zero" onClick={() => Add("0")}>
              0
            </button>

            <button className="btn blue " onClick={() => Add(".")}>
              .
            </button>

            <button className="btn equal" onClick={calc}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
