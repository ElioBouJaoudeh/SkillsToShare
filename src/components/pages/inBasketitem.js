import React from "react";
//import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../actions/ItemAction";

function InBasketItem({ item, index }) {
  const dispatch = useDispatch();

  const removeItemFromList = index => {
    dispatch(actionCreators.removeItem(index));
  };

  return (
    <div
      key={index}
      //variant="dark"
      onClick={() => removeItemFromList(index)}
    >
      {item.value}
    </div>
  );
}
export default InBasketItem;