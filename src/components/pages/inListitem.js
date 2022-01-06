import React from "react";
//import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../actions/ItemAction";

 function InListItem({ item, index }) {
  const dispatch = useDispatch();

  const addItemToBasket = index => {
    dispatch(actionCreators.addToBasket(index));
  };

  return (
    <div
      key={index}
      //variant="danger"
      onClick={() => addItemToBasket(index)}
    >
      {item.value}
    </div>
  );
}
export default InListItem;