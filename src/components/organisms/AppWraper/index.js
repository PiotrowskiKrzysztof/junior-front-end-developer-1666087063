import Footer from "../Footer";
import Header from "../Header";
import TasksList from "../TasksList";

import * as Styled from "./styles";

const AppWraper = () => {
  return (
    <Styled.AppWraper>
      <Header />
      <TasksList />
      <Footer />
    </Styled.AppWraper>
  );
};

export default AppWraper;
