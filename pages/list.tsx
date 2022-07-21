import * as React from "react";
import { DynamicSpace } from "../src/components/AccountPage/AccountPage.styled";
import { Checkout } from "../src/components/ListPage/Checkout";
import { ListItem } from "../src/components/ListPage/ListItem";
import { ListPageContainer } from "../src/components/ListPage/ListPage.styled";
import { IListItem } from "../src/types/IListItem";

interface ListPageProps {
  readonly list: IListItem[];
}

const ListPage: React.FC<ListPageProps> = ({ list }) => {
  const [basket, setBasket] = React.useState<IListItem[]>([]);

  const handleAddToCard = (item: IListItem) => {
    setBasket([...basket, item]);
  };

  return (
    <ListPageContainer>
      {list.map((item) => (
        <ListItem item={item} key={item.id} handleAddToCard={handleAddToCard} />
      ))}

      <DynamicSpace />
      <Checkout basket={basket} />
    </ListPageContainer>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3004/list");
  const data = await res.json();

  return {
    props: {
      list: data,
    },
  };
};

export default ListPage;
