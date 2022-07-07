import React, { Component } from 'react';       // Import react for this component
import TableData from '../JSON/TableData';      // Import test data JSON files for testing dynmical behaviour of table



class RegTable extends Component {
    constructor(props) {
        super(props);
    }


    state = { 
        columnNumber: 0
     }




     // Function to increment column Number

    columnIncrement = () => {
        let number = this.state.columnNumber;
        number = number + 1;
        this.setState({columnNumber: number});
        return this.state.columnNumber;
    }



   
    dataOfTable =() =>{

         // get table row data
        const column = Object.keys(TableData[0]);

        // this.columnIncrement();
    
        return TableData.map((data)=>{
        return(
            <tr> 
                        
                {  
                    column.map((v)=>{
                        return (<td>{data[v]}</td>)
                    })
                }
                
                <td><a href='#'>View Profile</a></td>
            </tr>
        )
        })
    }



    render() { 
        return ( 
            
            <div class="container">

            <table class="table table-striped">
                <thead>
                    <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Full Name of the Student</th>
                        <th scope="col">Registration Status</th>
                        {/* <th scope="col">Approval Status</th> */}
                        <th scope="col">Profile</th>
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