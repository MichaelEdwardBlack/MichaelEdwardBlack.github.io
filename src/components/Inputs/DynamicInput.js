// import React from "react";
// import { Fab } from "../Buttons";
// import TextInput from "./TextInput";

// export class DynamicInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       values: [""],
//     };
//     let classArray = [
//       "flex-shrink",
//       "flex-grow",
//       "flex-auto",
//       "leading-normal",
//       "flex-1",
//       "border",
//       "h-10",
//       "border-grey-light",
//       "rounded",
//       "rounded-l-none",
//       "px-3",
//       "relative",
//       "focus:border-blue",
//       "focus:shadow",
//       "mt-1",
//       "mb-2",
//       props.className,
//     ];
//     this.baseClass = classArray.join(" ");
//   }

//   handleChange = (e, index) => {
//     let values = this.state.values;
//     values[index] = e.target.value;
//     this.setState({ values: values });

//     if (this.props.onChange) {
//       this.props.onChange(values);
//     }
//   };

//   addInput = () => {
//     this.setState({
//       values: [...this.state.values, ""],
//     });
//   };

//   removeInput = (index) => {
//     let { values } = this.state;
//     values.splice(index, 1);
//     this.setState({ values });
//   };

//   render() {
//     return (
//       <>
//         <div className="flex flex-row">
//           <label className="flex-auto">
//             {this.props.label}
//             <span className="pl-2">
//               <Fab size="xs" onClick={this.addInput}>
//                 <AddIcon className="w-4 h-4 mb-1" />
//               </Fab>
//             </span>
//           </label>
//         </div>
//         {this.state.values.map((value, index) => (
//           <div className="relative flex-row" key={index}>
//             <div
//               className="absolute flex-auto text-gray-400 cursor-pointer hover:text-red-500"
//               style={{ top: "12px", left: "-24px" }}
//               onClick={() => this.removeInput(index)}
//             >
//               <TrashIcon />
//             </div>
//             <TextInput
//               className="w-full"
//               value={value}
//               onChange={(e) => this.handleChange(e, index)}
//               placeholder={"Enter " + this.props.label + " " + (index + 1)}
//             />
//           </div>
//         ))}
//       </>
//     );
//   }
// }

// export default DynamicInput;
