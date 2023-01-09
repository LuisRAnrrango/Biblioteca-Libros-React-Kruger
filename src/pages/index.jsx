import Book from "../components/Book";
import Layout from "../components/Layout";
import { useAppContext } from "../store/store";

export default function Index() {
  const store = useAppContext();

  const booksContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };

  return (
    <Layout>
      <h2 className="h2">Libros Gratis</h2>
      <div style={booksContainer}>
        {store.items.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
}
