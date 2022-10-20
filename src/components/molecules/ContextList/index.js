import { useState } from "react";
import ContextItem from "../ContextItem";
import * as Styled from "./styles";

export const ContextList = ({
  businessContexts,
  setSelectedContext,
  changeStatus,
}) => {
  const [activeItem, setActiveItem] = useState();
  return (
    <Styled.Container>
      {businessContexts.map((item) => (
        <ContextItem
          key={item?.id}
          {...item}
          handleSelectedContext={() => setSelectedContext(item)}
          {...{ setActiveItem }}
          {...{ activeItem }}
          handleChangeStatus={() => changeStatus(item?.id)}
        />
      ))}
    </Styled.Container>
  );
};

export default ContextList;
