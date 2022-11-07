import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "../Components/Details/Details";
import { useDispatch, useSelector } from "react-redux";
import { getDataApi } from "../Store/Product/product.actions";
import { Circles } from "react-loader-spinner";

const Product = () => {
  const params = useParams();
  const { _id } = params;
  const { data, loading, error } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  useEffect(() => {
    const url = `https://check-lr1yrg4f5-hitesht4.vercel.app/prod/${_id}`;
    dispatch(getDataApi(url));
  }, []);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Circles
          height="650"
          width="150"
          color="#f6d951"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  if (error) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>Error...</h2>
      </div>
    );
  }
  return (
    <div>
      <Details item={data[0]} />
    </div>
  );
};

export default Product;
