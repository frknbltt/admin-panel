import { Card } from "antd";
import React, { useState } from "react";

export const UserCard = (props) => {
  const { Meta } = Card;
  const [cardState, setCardState] = useState(props);
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title={cardState.title} description="www.instagram.com" />
    </Card>
  );
};
