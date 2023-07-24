import Wrapper from "../../hoc/Wrapper";
import Header from "../Header";

const Layout = (props) => {
  return (
    <Wrapper>
      <Header />
      <main>
        <div>{props.children}</div>
      </main>
    </Wrapper>
  );
};

export default Layout;
