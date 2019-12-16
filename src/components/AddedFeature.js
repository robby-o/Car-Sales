import React, { useCallback } from "react";
import { removeFeature } from "../actions/featureActions";
import { useDispatch } from "react-redux";

const AddedFeature = ({ feature }) => {
  const dispatch = useDispatch();
  const removeThis = useCallback(() => dispatch(removeFeature(feature)), [
    dispatch,
    feature
  ]);

  return (
    <li>
      <button className="button" onClick={removeThis}>
        X
      </button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
