import React, { Component } from 'react';       // Import react for this component
import TableData from '../JSON/TableData';      // Import test data JSON files for testing dynmical behaviour of table



class RegTable extends Component {
    constructor(props) {
        super(props);
    }


   
    dataOfTable =() =>{
        // get table row data
        // const column = Object.keys(TableData[0]);

        // console.log(column);

        /*
        1). The property of the column (fullName) shoould be changed to propert of JSON object that gives name of the user
        2). Object should be retrived as JSON array to fill the Table

        */

        const column = ['fullName']; 


                                                
    
        return TableData.map((data)=>{
            return(
                <tr> 
                            
                    {  
                        column.map((v)=>{
                            return (<td><a href='#' style={{textDecoration: 'none'}}>{data[v]}</a></td>)
                        })
                    }
                    
                </tr>
            )
        })
    }



    render() { 
        return ( 
            
            <div class="container">

            <h1 style={{fontWeight: 'lighter'}}>Applied Students (To be Registerted)</h1>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col" style={{fontSize: '25px'}}>Full Name of the Student</th>
                    </tr>
                </thead>

                <tbody>
                    {this.dataOfTable()}
                </tbody>


            </table>

            </div>


         );
    }
}
 
export default RegTable;