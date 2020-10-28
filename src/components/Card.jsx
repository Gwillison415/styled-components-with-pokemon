import React, { useState } from "react";
import styled from "styled-components";
const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();
export default function CardContainer(props) {
  const { name, url } = props
  const [details, setDetails] = useState({img:false});
  P.resource(url).then((data) => {
    const {
      sprites: { front_default: img },
      height,
      weight,
    } = data;
    setDetails({ height, weight, img });
  });
  return details.img ? (
    <MemoizedCard {...props} {...details} />
  ) : (
    <Card {...props}/>
  );
}

const Image = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.src + "image",
}))`
  height: 64px;
  width: 64px;
`;
const ImageContainer = styled.div``;
export function Card({ name,  height, weight, img }) {
  const handleClick =() => {
    
  }
  return (
    <div>
      <ImageContainer>
        {img &&(<Image src={img}></Image>)}
      </ImageContainer>
      <div>{name}</div>
    </div>
  );
}

export const MemoizedCard = React.memo(Card);
