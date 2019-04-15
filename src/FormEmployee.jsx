import React from 'react'

    

    const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";

class FormEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            poster:'',
            comment:'',
            }
            
                
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    
        onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
                    } 
                    submitForm(e) {
                        e.preventDefault();

                        const config = {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(this.state),
                            };
                        

                        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                console.log(res)
            if (res.error) {
                alert(res.error);
            } else {
                alert(`Film ajouté avec l'ID ${res}!`);
            }
            }).catch(e => {
            console.error(e);
            console.log(e);
            alert('Erreur lors de l\'ajout d\'un film');
            });


    }

    postMovie = () => {
        

        
    }
    render(){
        return (
            <div className="FormEmployee">
    <h1>Ton Film préféré</h1>

    <form onSubmit={this.submitForm}>
    <fieldset>
        <legend>Informations</legend>
        <div className="form-data">
        <label htmlFor="name">Nom du film</label>
        <input
            type="text"
            id="name"
            name="name"
            onChange={this.onChange}
            value={this.state.name}
        />
        </div>

        <div className="form-data">
        <label htmlFor="poster">Poster</label>
        <input
            type="text"
            id="poster"
            name="poster"
            onChange={this.onChange}
            value={this.state.poster}
        />
        </div>

        <div className="form-data">
        <label htmlFor="comment">Comment</label>
        <input
            type="text-area"
            id="comment"
            name="comment"
            onChange={this.onChange}
            value={this.state.comment}
        />
        </div>
        <hr />
        <div className="form-data">
        <input type="submit" value="Envoyer" onClick={this.postMovie}/>
        </div>
    </fieldset>
    </form>
    </div>
        )
        
    }
}

export default FormEmployee
