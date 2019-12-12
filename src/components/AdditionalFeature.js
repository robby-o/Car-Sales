import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { buyItem } from "../actions/featureActions";

const AdditionalFeature = ({ feature }) => {
  const dispatch = useDispatch();
  const buyThis = useCallback(() => dispatch(buyItem(feature)), [
    dispatch,
    feature
  ]);

  return (
    <li>
      <button className="button" onClick={buyThis}>
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
