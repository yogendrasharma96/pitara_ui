// import React, { useState } from 'react'
// import { SketchPicker } from "react-color";
// import { useDispatch } from 'react-redux';
// import { addProductDetails } from '../redux/addProductSlice';
// import { defaultColorPickerClr } from '../utils/constants';

// const ColorPicker = ({ uuid }) => {

//     const dispatch = useDispatch();

//     const handleColorSelect = (e) => {
//         setSketchPickerColor(e);
//         dispatch(addProductDetails({ id: uuid, productColor: e }));
//     }

//     const [sketchPickerColor,setSketchPickerColor] = useState(defaultColorPickerClr);

//     const [open, setOpen] = useState(false);
//     const { r, g, b, a } = sketchPickerColor;

//     const handleColorPickerDropDown = () => {
//         setOpen(!open);
//     }

//     return (
//         <div>
//             <div
//                 style={{
//                     backgroundColor: `rgba(${r},${g},${b},${a})`,
//                     width: 35,
//                     height: 35,
//                     border: "2px solid white",
//                 }}
//                 className='rounded-full'
//                 onClick={handleColorPickerDropDown}
//             ></div>
//             {open && <SketchPicker
//                 onChange={(color) => {
//                     handleColorSelect(color.rgb);
//                 }}
//                 className="absolute z-50 mt-2"
//                 color={sketchPickerColor}
//             />}
//         </div>
//     )
// }

// export default ColorPicker;