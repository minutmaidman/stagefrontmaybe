import React from 'react';
import GenListe from './genliste';
import axios from 'axios'

let utils = [{id : "01", title : "Software Engineer", datePosted : "2022-05-02",
 validTill : "2022-06-01", description : "Mécanichien Canin",
 companyName : "Chien", location : "Dogburg",
 jobType : "Telecommute", employmentType : "FullTime",
 salary : "35/h USD", requirements : "Be a dog"},
 {id : "02", title : "Network Andy", datePosted : "2022-05-06",
 validTill : "2022-06-01", description : "Network Cableux",
 companyName : "Chien", location : "Dogburg",
 jobType : "Office", employmentType : "PartTime",
 salary : "28/h USD", requirements : "Be a dog with thumbs"}]; 

class liste extends React.Component {

    constructor(props){
        super(props);

            this.state={
                utilisateurs:[]

            }
            this.userList = this.userList.bind(this);
            this.deleteUtil = this.deleteUtil.bind(this);    
    }

    componentDidMount(){
        this.setState ({utilisateurs:utils})
            /*axios.get('http://localhost:3001/User')

            .then(response =>{
                console.log(response.data);
                if (response.data.lenght > 0){
                    this.setState ({utilisateurs: response.data})
                }
            })
            .catch((error)=>{

                console.log(error);
            })*/
    }

    deleteUtil(id){
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res => console.log(res.data));
        this.setState({utilisateurs:this.state.utilisateurs.filter(el =>el._id !==id)
        })
    }

    userList(){
        return this.state.utilisateurs.map(utilCourant => {

            return <GenListe utilisateurs={utilCourant} deleteUtil={this.deleteUtil} key={utilCourant.code}/>;
        })
    }

    render() {

        return (
            <div className="container">
                <div class ="row">
                    <div class="col-6">
                        <h3 style={{color:"white"}}> Liste des offres</h3>
                        <table className="table" style={{color:"white"}}>
                            <thead className="thead-light">
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Date Posted</th>
                                    <th>Valid Till</th>
                                    <th>Description</th>
                                    <th>Company Name</th>
                                    <th>Location</th>
                                    <th>Job Type</th>
                                    <th>Employment Type</th>
                                    <th>Salary</th>
                                    <th>Requirements</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.userList()}
                            </tbody>
                        </table>
                    </div>
                    <div class="col-6">
                    <table className="table" style={{color:"white"}}>
                            <thead className="thead-light">
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Date Posted</th>
                                    <th>Valid Till</th>
                                    <th>Description</th>
                                    <th>Company Name</th>
                                    <th>Location</th>
                                    <th>Job Type</th>
                                    <th>Employment Type</th>
                                    <th>Salary</th>
                                    <th>Requirements</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.userList()}
                            </tbody>
                        </table>
                    </div> 
                </div>
            </div>
        )
    }
}
export default liste;