import React, { useState } from "react";
import uuid from "uuid/v4";

function NewBoxForm({ createBox }) {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    });
}