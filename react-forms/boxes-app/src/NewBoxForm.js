import React, { useState } from "react";
import uuid from "uuid/v4";

function NewBoxForm({ createBox }) {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const getInput = (e) => {
        e.preventDefeault();
        makeInput({...formData, id: uuid() });
        setFormData({ height: "", width: "", backgroundColor: ""});
    }

    return (
        <div>
            <form onSubmit={getInput}>
                <div>
                    <label htmlFor="height">Height</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="height"
                        value={formData.height}
                    />
                </div>
                <div>
                <label htmlFor="width">Width</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="width"
                        value={formData.width}
                    />
                </div>
                <div>
                <label htmlFor="height">Height</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="height"
                        value={formData.height}
                    />
                </div>
                <div>
                <label htmlFor="backgroundColor">Background Color</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="backgroundColor"
                        value={formData.backgroundColor}
                    />
                </div>
                <button id="newBox">Add A Box</button>
            </form>
        </div>
    );
}

export default NewBoxForm;