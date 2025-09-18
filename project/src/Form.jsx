import React from "react";
import NameField from './NameField'
import FatherNameField from "./FatherNameField";
import MotherNameField from "./MotherNameField";
import DateOfBirthField from "./DateOfBirthField";
import AgeField from "./AgeField";
import EmailField from "./EmailField";
import DepartmentField from "./DepartmentField";
import PhoneNumber from "./PhoneNumber";
const Form=()=>{
    return (
        <>
        <h2> Form Details</h2>
        <NameField/>
        <br></br>
        <FatherNameField/>
        <br></br>
        <MotherNameField/>
        <br></br>
        <DateOfBirthField/>
        <br></br>
        <AgeField/>
        <br></br>
        <EmailField/>
        <br></br>
        <DepartmentField/>
        <br></br>
        <PhoneNumber/>
        </>

    )
}
export default Form;
    