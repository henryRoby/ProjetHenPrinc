
import React from 'react';

class Profil extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
      nom: '',
      email: '',
      passeWord: '',
      persons:[]

    };
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }




  componentDidMUpdate(){
    console.log("update de pers",this.state.persons);
    
  }



  componentDidMount() {
    let url = "http://localhost:8002/upload"
    // axios.get()
    //   .then(res => {
    //       console.log("axios get res",res);

    //     const persons = res.data;
    //     this.setState({ persons });
    //   })
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({

            persons: result

          });
          console.log(this.state.persons)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
          console.log("tsy metyy")
        }
      )
  }









  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }





  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);
    data.append('nom', this.state.nom);
    data.append('email', this.state.email);
    data.append('passeWord', this.state.passeWord)

    fetch('http://localhost:8002/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://localhost:8002/${body.file}` });
        console.log('ity ilay body.fil', body.file);

      });
    });
  }

  render() {
  
    
    return (
      <div>
        <form onSubmit={this.handleUploadImage}>





          <label>Nom:</label>
          <input type="text"
            value={this.state.value}
            onChange={this.onChange}
            name="nom" /><br></br>

          <label>Email:</label>
          <input type="email"
            value={this.state.value}
            onChange={this.onChange}
            name="email" /><br></br>
          <label>passeWord:</label>
          <input type="passWord"
            value={this.state.value}
            onChange={this.onChange}
            name="passeWord"/><br></br>




          <div>
            <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
          </div>
          <div>
            <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="name" />
          </div>
          <br />
          <div>
            <button className="btn btn-primary">Ajouter</button>
          </div>
          {/* <img src={this.state.imageURL} alt="img" /> */}
        </form>
        <div>
          {this.state.persons.length>0?(<div>
            {this.state.persons.map(
              (use)=>{
                return <div>
                  <div>nom: {use.nom}</div>
                  <div>email: {use.email}</div>
                  <div>ID: {use._id}</div>
                 
                  <img src={use.photo_profile} width="50" alt="img" />

                 </div>
              }
            )}
          </div>):""}
        </div> 
      </div>

    );
  }
}

export default Profil;
