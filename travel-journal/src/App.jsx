import Header from "./components/header"
import Entry from "./components/Entry"
import Contact from "./components/Contacts"
import Counter from "./components/Counter"
import SearchSom from "./components/Search"

export default function App(){
  return(
    <>
      <Header />
      <SearchSom />
      <Entry />
      <div className="contacts">
            <Contact
                img="src/assets/mr-whiskerson.png"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img="src/assets/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                img="src/assets/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="src/assets/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
        <Counter />
    </>
  ) 
}