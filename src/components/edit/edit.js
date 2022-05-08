import React from 'react';
import axios from 'axios';

class Edit extends React.Component {

    constructor(props){
        super(props);
            this.state={
                code:'',
                nom:'',
                prenom:'',
                id:''
            }
            this.onChangeCode = this.onChangeCode.bind(this);
            this.onChangeNom = this.onChangeNom.bind(this);
            this.onChangePrenom = this.onChangePrenom.bind(this);
            this.onSubmit = this.onSubmit.bind(this);

    }

    onChangeCode(e){
        this.setState({
            code:e.target.value
        })
    }

    onChangeNom(e){
        this.setState({
            nom:e.target.value
        })
    }

    onChangePrenom(e){
        this.setState({
            prenom:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const util= {
            code: this.state.code,
            nom: this.state.nom,
            prenom: this.state.prenom
        }
        console.log(util);
        axios.post('http://localhost:3001/newUser', util)
        .then(res=>console.log(res.data));
        this.setState({
            prenom: '',
            nom: '',
            code: ''
        })
    }

    componentDidMount(){
        console.log(this.props.match.params.id)
        axios.get('http://localhost:3001/modifyUser/'+this.props.match.params.id)
        .then(response=> {
            this.setState ({
                code: response.data.code,
                nom: response.data.nom,
                prenom: response.data.prenom,
                id: this.props.match.params.id
            })
            .catch((error)=>{
                console.log(error);
            })
            console.log(this.state.code);
        })
    }

    render() {

        return (
            <div className="container">
                <h3>Éditer un utilisateur</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Nom :</label>
                        <input type="text" required className="form-control" value={this.state.nom} onChange={this.onChangeNom}/>
                    </div>
                    <div className="form-group">
                        <label>Prénom :</label>
                        <input type="text" required className="form-control" value={this.state.prenom} onChange={this.onChangePrenom}/>
                    </div>
                    <div className="form-group">
                        <label>Code :</label>
                        <input type="text" required className="form-control" value={this.state.code} onChange={this.onChangeCode}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Éditer" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
export default Edit;