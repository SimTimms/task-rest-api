import ItemList from "../../../components/Forms/ItemList";
import CreateItemForm from "../../../components/Forms/CreateItemForm";
import UpdateItemForm from "../../../components/Forms/UpdateItemForm";
import DeleteItemForm from "../../../components/Forms/DeleteItemForm";
import { JSX, useContext } from "react";
import ItemContext from "../../../context/ItemContext";
import { ItemContextType, views } from "../../../types";

const SectionRouter: React.FC = () => {
  const contextValue = useContext(ItemContext) as ItemContextType;

  if (!contextValue) {
    throw new Error("ItemContext must be used within a valid provider.");
  }

  const sections: { [key in views]?: JSX.Element } = {
    [views.Create]: (
      <section data-testid="create-form-component" aria-label="input form">
        <CreateItemForm />
      </section>
    ),
    [views.Read]: (
      <section
        className="item-list"
        data-testid="item-list-component"
        aria-label="item list"
      >
        <ItemList itemArray={contextValue.itemArray} />
      </section>
    ),
    [views.Update]: (
      <section data-testid="item-list-component" aria-label="item list">
        <UpdateItemForm />
      </section>
    ),
    [views.Delete]: (
      <section data-testid="delete-form-component" aria-label="delete form">
        <DeleteItemForm />
      </section>
    ),
  };

  return (
    sections[contextValue.itemArray.view] || (
      <section aria-label="default section">
        <p>Invalid Section</p>
      </section>
    )
  );
};

export default SectionRouter;
