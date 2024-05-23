import React, { useState } from 'react'
import { SketchPicker } from "react-color";

const ColorPicker = () => {
    const [sketchPickerColor, setSketchPickerColor] = useState({
        r: "241",
        g: "112",
        b: "19",
        a: "1",
    });

    const [open, setOpen] = useState(false);
    const { r, g, b, a } = sketchPickerColor;

    const handleColorPickerDropDown = () => {
        setOpen(!open);
    }

    return (
        <div>
            <div
                style={{
                    backgroundColor: `rgba(${r},${g},${b},${a})`,
                    width: 35,
                    height: 35,
                    border: "2px solid white",
                }}
                className='rounded-full'
                onClick={handleColorPickerDropDown}
            ></div>
            {open && <SketchPicker
                onChange={(color) => {
                    setSketchPickerColor(color.rgb);
                }}
                className="absolute z-50 mt-2"
                color={sketchPickerColor}
            />}
        </div>
    )
}

export default ColorPicker