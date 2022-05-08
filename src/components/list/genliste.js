/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom'

class GenListe extends React.Component {
    render() {

        return (
            <tr>
                <td>{this.props.utilisateurs.id}</td>
                <td>{this.props.utilisateurs.title}</td>
                <td>{this.props.utilisateurs.datePosted}</td>
                <td>{this.props.utilisateurs.validTill}</td>
                <td>{this.props.utilisateurs.description}</td>
                <td>{this.props.utilisateurs.companyName}</td>
                <td>{this.props.utilisateurs.location}</td>
                <td>{this.props.utilisateurs.jobType}</td>
                <td>{this.props.utilisateurs.employmentType}</td>
                <td>{this.props.utilisateurs.salary}</td>
                <td>{this.props.utilisateurs.requirements}</td>
                <td>
                    
                <Link to={"/edit/" + this.props.utilisateurs._id}>Édition</Link> <a href="#" onClick={() => { this.props.deleteUtil(this.props.utilisateurs._id)}}>Suppression</a>
                </td>
            </tr>
        )
    }
}
export default GenListe;