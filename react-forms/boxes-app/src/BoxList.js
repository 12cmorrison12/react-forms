import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm.js";

function BoxList() {
    const [boxes, setBoxes] = useState([]);
    const addBox = (boxObj) => {
        setBoxes(boxes => [...boxes, boxObj]);
    };

    const remove = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    const boxComponent = boxes.map(box => (
        <Box 
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            handleRemove={remove}
            backgroundColor={box.backgroundColor}
        />
    ));

    return (
        <div>
            <NewBoxForm createBox={addBox} />
            {boxComponent}
        </div>
    );
}

export default BoxList;