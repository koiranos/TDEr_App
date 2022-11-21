import React, { useState, useEffect } from "react";

import CustomCard from "../CustomCard/CustomCard";
import CustomModal from "../CustomModal/CustomModal";
import NewItemForm from "../Forms/NewItemForm/NewItemForm";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import styled from "styled-components";

const AppContainer = () => {
  const [toDoItems, setToDoItems] = useState([]);
  const [openAddNewItemModal, setOpenAddNewItemModal] = useState(false);
  const [newItemTitle, setNewItemTitle] = useState("");
  const [newItemDescription, setNewItemDescription] = useState("");
  const [isNewItemExtended, setIsNewItemExtended] = useState(false);

  useEffect(() => {
    const localToDoItems = JSON.parse(localStorage.getItem("toDoItems"));
    setToDoItems(localToDoItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
  }, [toDoItems]);

  useEffect(() => {
    if (openAddNewItemModal) {
      setNewItemTitle("");
      setNewItemDescription("");
    }
  }, [openAddNewItemModal]);

  const removeItemFromToDoItems = (idForRemoval) => {
    const tempArray = toDoItems.filter((item, id) => id !== idForRemoval);
    setToDoItems(tempArray);
  };

  return (
    <div>
      <AddItemButton
        size="large"
        type="text"
        onClick={() => setOpenAddNewItemModal(true)}
      >
        <PlusOutlined />
        Add Item
      </AddItemButton>
      <CustomCard
        toDoItems={{ get: toDoItems, set: setToDoItems }}
        removeItemFromToDoItems={removeItemFromToDoItems}
      />
      <CustomModal
        isModalOpen={openAddNewItemModal}
        closeModal={setOpenAddNewItemModal}
        onOk={() => {
          const tempItems = toDoItems;
          tempItems.push({
            title: newItemTitle,
            description: newItemDescription,
            extended: isNewItemExtended
          });
          setToDoItems(tempItems);
          setOpenAddNewItemModal(false);
        }}
        title="Test Modal"
        handleModal={{ get: openAddNewItemModal, set: setOpenAddNewItemModal }}
        handleNewItem={{ get: toDoItems, set: setToDoItems }}
      >
        <NewItemForm
          title={{ get: newItemTitle, set: setNewItemTitle }}
          description={{ get: newItemDescription, set: setNewItemDescription }}
          extended={{ get: isNewItemExtended, set: setIsNewItemExtended }}
        />
      </CustomModal>
    </div>
  );
};

const AddItemButton = styled(Button)`
  /* font-size: 20px; */
  margin-bottom: 10px;
  margin-top: 10px;
  color: saddlebrown;
  /* padding: 10px; */
`;

export default AppContainer;
