import React from 'react';
import ListComponent from '../components/ListComponent';
import axios from 'axios';

// use recomponse for cleaner HOC
export default class List extends React.Component {
  constructor() {
    super();
    this.state = {
      spaces: [],
    };
  }

  componentDidMount() {
    const { page } = this.props;
    axios.get(`https://thisopenspace.com/lhl-test?page=${page ? page : 0}`)
    .then(res => {
      //  set spaces and remove country from address
      this.setState({
        spaces: res.data.data
        .map(space => 
          ({...space, address: space.address.split(',')[0]})),
      })
    })
    .catch((err) => alert(`Error ${err}`));
  }

  render() {
    if(this.state.spaces) return (
      <ListComponent spaces={this.state.spaces} />
    )
    return () => <div>Loading</div>
  }
};
