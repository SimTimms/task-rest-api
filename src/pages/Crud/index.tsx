import "./Crud.css";
import Menu from "../../components/Menu";
import SectionRouter from "./views/SectionRouter";
import ItemContextProvider from "../../context/ItemContextProvider";
/**
 * A basic CRUD component demonstrating item fetching and button functionality.
 */

function Crud() {
  return (
    <>
      <header>
        <h1>CRUD</h1>
      </header>
      <ItemContextProvider>
        <nav data-testid="menu-component">
          <Menu />
        </nav>
        <SectionRouter />
      </ItemContextProvider>
    </>
  );
}

export default Crud;
