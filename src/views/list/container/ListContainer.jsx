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
      this.setState({
        spaces: res.data.data,
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