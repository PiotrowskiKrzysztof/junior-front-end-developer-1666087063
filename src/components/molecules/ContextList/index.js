import ContextItem from "../ContextItem";
import * as Styled from "./styles";

export const ContextList = ({ businessContexts, setSelectedContext }) => {
  return (
    <Styled.Container>
      {businessContexts.map((item) => (
        <ContextItem
          key={item?.id}
          {...item}
          handleSelectedContext={() => setSelectedContext(item)}
        />
      ))}
    </Styled.Container>
  );
};

export default ContextList;
