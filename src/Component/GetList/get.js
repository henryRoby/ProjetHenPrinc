import React, { Component } from 'react'

 class get extends Component {

  constructor(props) {
    super(props);

    this.state = {
      persons:[]

    };

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

  render() {
    return (
      <div>
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
    )
  }
}
export default get;