import React from "react";
import styled from "styled-components";



export function Card({ name, url }) {
    const Image = styled.img.attrs(props =>({
      src: props.url,
      alt: props.url+'image',
    }))`
      height: 64px;
      width: 64px;
    `;
    const ImageContainer = styled.div`
      
    `;
  return (
    <div>
      <ImageContainer>

      <Image name={name} url={url}></Image>
      </ImageContainer>
      <div>Card name: {name}</div>
    </div>
  );
}

export const MemoizedCard = React.memo(Card);