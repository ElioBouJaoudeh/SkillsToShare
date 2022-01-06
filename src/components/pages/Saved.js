import React,{Component} from 'react';
import {Container,ListGroup,ListGroupItem,Button} from 'reactstrap';
import {CSSTransition,TransitionGroup} from'react-transition-group';
import {connect} from 'react-redux';
import {getItems} from '../../actions/ItemAction';
import PropTypes from 'prop-types';


class Saved extends Component{
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;
    return (
      <>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={() => {
            const name = prompt('Enter Item');
            if (name) {
              this.setState(state => ({
                items: [...state.items, { id:'4', name }]
              }));
            }
          }}
        >
          Add Item
        </Button>
        <div className="boxST">
          <h2>Saved Notes</h2>
          {items.map(({id,name}) => (
            <p key={id}>{name}</p>
          ))}
          <a href="/saved">Saved Notes</a>
        </div>
      </>
    );
  }
}


Saved.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems }
)(Saved);