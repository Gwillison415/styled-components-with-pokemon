import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as CONST from "../redux/constants";

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

export default function CardContainer(props) {
  const { url } = props;
  const [details, setDetails] = useState({ img: false });
  useEffect(() => {
    let mounted = true;
    P.resource(url)
      .then((data) => {
        const {
          sprites: { front_default: img },
          height,
          weight,
          id
        } = data;
        if (mounted) {
          setDetails({ id,height, weight, img });
        }
      })
      .catch((err) => console.log("err", err));
    return () => {
      mounted = false;
    };
  }, []);
  return details.img ? (
    <MemoizedCard {...props} {...details} />
  ) : (
    <Card {...props} />
  );
}

const Image = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.src + "image",
}))`
  height: 64px;
  width: 64px;
`;
const ImageContainer = styled.div`
  cursor: pointer;
`;
export function Card({id, name, height, weight, img }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: CONST.SELECT_CURRENT_POKE,
      payload: {id, name, height, weight, img },
    });
  };
  return (
    <div>
      <ImageContainer onClick={handleClick}>
        {img && <Image src={img}></Image>}
      </ImageContainer>
      <div>{name}</div>
    </div>
  );
}

export const MemoizedCard = React.memo(Card);
