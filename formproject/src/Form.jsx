import React from "react";
import './Form.css';
const Form = () =>{
    const Submit =(event)=>{
        alert("this form is submitted")
    }
    const Details =()=>{
        
    }
    return (
        <>
        <form onSubmit={(event)=>Submit(event)}>
            <h1>Registration Form</h1>
            <div>
            <label>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder="enter your Name" required/>
            <br/><br/>
            </div>
            <div>
            <label>Dept:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder="enter Dept" required/>
            <br/><br/>
            </div>
            <div>
            <label>Roll.No:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder="enter your Id" required/>
            <br/><br/>
            </div>
            <div>
            <label>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="email" placeholder="enter email" required/>
            <br/><br/>
            </div>
            <div>
            <label>FatherName:&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder="enter Father Name" required/>
            <br/><br/>
            </div>
            <div>
            <label>MotherName:&nbsp;&nbsp;</label>
            <input type="text" placeholder="enter Mother Name" required/>
            <br/><br/>
            </div>
            <div>
            <label>D.O.B:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="date" placeholder="enter your D.O.B" required/>
            <br/><br/>
            </div>
            <div>
            <label>Gender:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="radio" id="male" name="Gender"/>
            <label>Male</label>
            <input type="radio" id="Female" name="Gender"/>
            <label>Female</label>
            </div>
            <button >Submit</button>
        </form>


        </>
    )
}
export default Form;