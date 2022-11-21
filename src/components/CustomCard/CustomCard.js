import React from "react";

// import CustomCardView from "./CustomCardView";
import { Card, Skeleton, Input } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";

import styled from "styled-components";

const CustomCard = ({ toDoItems, removeItemFromToDoItems }) => {
  const { Meta } = Card;

  const renderCards = () => {
    if (toDoItems) {
      return toDoItems.get.map((card, id) => {
        return (
          <StyledCard
            actions={
              card.extended
                ? [
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />
                  ]
                : []
            }
          >
            <Skeleton avatar loading={false}>
              <Meta
                avatar={<span style={{ fontSize: "40px" }}>{id + 1}</span>}
                title={card.title}
                description={card.description}
              />
            </Skeleton>
            {card.extended && (
              <Input
                addonBefore="Focus Time (min)"
                placeholder="set focus time"
                defaultValue={20}
              />
            )}
            <DeleteCardButton
              onClick={() => {
                removeItemFromToDoItems(id);
              }}
            >
              X
            </DeleteCardButton>
          </StyledCard>
        );
      });
    }
  };

  return <CardsContainer>{renderCards()}</CardsContainer>;
};

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledCard = styled(Card)`
  width: 400px;
  margin: 0 auto;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
`;

const DeleteCardButton = styled.span`
  position: absolute;
  top: 4px;
  right: 8px;
  margin: 0;
  padding: 30px 10px;
  font-size: 20px;
  cursor: pointer;
  color: white;
  &:hover {
    color: black;
  }
`;

export default CustomCard;
