import type React from "react";
import type { IList } from "../../types/IList";
import "./ListElement.css";
/* import useListElement from "../../hooks/useListElement";*/
import TrashIcon from "../../assets/icons/TrashIcon";
import { useListOfLists } from "../../hooks/useListOfLists";

const ListElement: React.FC<IList> = ({
  id,
  name,
/*   creationDate,
  lastTimeEdited, */
}) => {

  /* const { isHovered, hover } = useListElement() */
  const { removeList } = useListOfLists();

  return (
    <div className="list-element" id={id}>
      <div>{name}</div>
      <button className="trash-button" onClick={() => {removeList(id)}}>
        <TrashIcon />
      </button>
    </div>
  );
};

export default ListElement;
