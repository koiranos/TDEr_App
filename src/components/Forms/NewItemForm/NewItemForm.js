import React, { useState } from "react";

import { Input, Checkbox } from "antd";
import styled from "styled-components";

const NewItemForm = ({ title, description, extended }) => {
  return (
    <FormContainer>
      <Input
        addonBefore="Title"
        placeholder="set item title"
        value={title.get}
        onChange={(input) => title.set(input.target.value)}
      />
      <Input
        addonBefore="Description"
        placeholder="set item description"
        value={description.get}
        onChange={(input) => description.set(input.target.value)}
      />
      <Checkbox onChange={(e) => extended.set(e.target.checked)}>
        Enable Options
      </Checkbox>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default NewItemForm;
