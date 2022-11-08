import React from "react";
import {PropsBase} from "../../../models/ui/data/PropsBase";
import {ButtonData} from "../../../models/ui/data/ButtonData";

interface ButtonProps extends PropsBase {
    buttonData: ButtonData
}

const Button = ({buttonData}: ButtonProps) => {
    return <button className="app__button" type="submit" onClick={buttonData.action}>
        {buttonData.name}
    </button>
}

export default Button;