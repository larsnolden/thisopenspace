import React from 'react';
import ListComponent from '../components/ListComponent';
import axios from 'axios';

// use recomponse for cleaner HOC
export default class List extends React.Component {
  constructor() {
    super();
    this.state = {
      spaces: [],
      page: 0,
    };
    this.fetchSpaces = this.fetchSpaces.bind(this);
  }

  fetchSpaces() {
    const { page } = this.props;    
    axios.get(`https://thisopenspace.com/lhl-test?page=${page ? page : 0}`)
      .then(res => {
        //  standard pageSize is 10, if smaller then there are no listings left
        let nextPage = res.data.page_size < 10 ? '/' : +page + 1;
  
        let previousPage = page > 1 ?  +page - 1 : '/';
  
        //  set spaces and remove country from address
        this.setState({
          nextPage,
          previousPage,
          page,
          spaces: res.data.data.map(space => 
            ({...space, address: space.address.split(',')[0]})),
        });
  
      })
      .catch((err) => alert(`Error ${err}`));
  }

  componentDidMount() {
    // initial fetch
    this.fetchSpaces();
  }

  componentDidUpdate() {
    // page requested changed, fetch new data
    if(this.props.page !== this.state.page) this.fetchSpaces();
  }

  render() {
    if(this.state.spaces) return (
      <ListComponent 
        spaces={this.state.spaces} 
        nextPage={this.state.nextPage}
        previousPage={this.state.previousPage}
      />
    )
    return () => <div>Loading</div>
  }
};
