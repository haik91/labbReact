import {useEffect , useState } from "react"; 
import Employee from "./Employee";


function EmployeeList(){

    const [employess, setEmployess] = useState([ ]);



function handleAddNewExp(){
    setEmployess((prevState)=>{
return[
...prevState, 
    {
        name : "default",
        email: "default@softhouse.se",
        phone: "0765656565",
        skills: "none", 
        avatar: "https://i.imgur.com/Q9qFt3m.png"
    },

   ];
});
}



    return (
    <div>
        <h3>EmployeeList</h3>
        <button onClick ={handleAddNewExp}> 
        Add new Employee </button>
        {employess.map((employee)=> (
        <Employee EmployeeData={employee} />
        ))}
        </div>
    );

}


export default EmployeeList; 