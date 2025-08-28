import { useEffect } from "react";
import { useListOfLists } from "../../hooks/useListOfLists";
import type { IList } from "../../types/IList";
import './ListOfLists.css'
import ListElement from "../ListElement/ListElement";

const ListOfLists = () => {
  const { list } = useListOfLists();

  useEffect(() => {
    console.log(list);
  }, [list]);

  return <article className="list-container">
    {
      list.length === 0 ? (
        <>no lists</>
      ) : (
        list.map((list: IList, index) => {
          return <ListElement {...list} key={index} />
        })
      )
    }
  </article>;
};

export default ListOfLists;
