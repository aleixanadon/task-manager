import AddInput from "../components/AddInput/AddInput"
import ListOfLists from "../components/ListOfLists/ListOfLists"
import { useListOfLists } from "../hooks/useListOfLists"

const Home = () => {
  const { addList } = useListOfLists();
  return (
    <main>
      <section>
        <ListOfLists />
        <AddInput 
          placeholder="New list..." 
          addFunction={addList}
        />
      </section>
      <section>

      </section>
    </main>
  )
}

export default Home