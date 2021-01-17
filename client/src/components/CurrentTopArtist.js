import React from "react";
import styled from "styled-components";

import { Card } from "styles";

const MiniCard = styled(Card)`
  width: 555px;
  height: 200px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
`;

const CurrentTopArtist = (props) => (
  <MiniCard>
    <h3>Your Current Top Artist</h3>
    <Content>
      <Category>
        <h3>{props.artist.name}</h3>
        <img
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "5px",
            alignSelf: "flex-end",
          }}
          src={props.artist.images[1].url}
          alt="album-cover"
        />
      </Category>
    </Content>
  </MiniCard>
);

export default CurrentTopArtist;
