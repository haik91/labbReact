
function Employee({ EmployeeData }) {
    return (
        <div className="EmployeeDiv">
            <img src={EmployeeData.avatar} className="avatar" />


            <div>
                <h2>
                    <strong>
                     name  
                     </strong>
                    {EmployeeData.name}
                </h2>

                <p>
                    <strong> 
                    Email:
                   </strong>
                        {EmployeeData.email}
                </p>

                <p>
                    <strong> 
                    Phone:
                    </strong>
                    {EmployeeData.phone}
                </p>

                <p>
                    <strong> 
                        skills:
                   </strong>
                   {EmployeeData.skills}
                </p>


            </div>
        </div>
    );



}
export default Employee;