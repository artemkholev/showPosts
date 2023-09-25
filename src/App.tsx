import "./Styles.css";
import { Book, BookInformation, User, Review } from "./lib/types"
import { getBooks, getUsers, getReviews } from "./lib/api";
import { useEffect, useState, FC } from "react";
import Card from "./Card";

// Техническое задание:
// Доработать приложение App, чтобы в отрисованном списке
// были реальные отзывы, автор книги и автор отзыва.
// Данные об отзывах и пользователях можно получить при помощи асинхронных
// функций getUsers, getReviews

// функция getBooks возвращает Promise<Book[]>
// функция getUsers возвращает Promise<User[]>
// функция getReviews возвращает Promise<Review[]>

// В объектах реализующих интерфейс Book указаны только uuid
// пользователей и обзоров

// // В объектах реализующих интерфейс BookInformation, ReviewInformation
// указана полная информация об пользователе и обзоре.

const toBookInformation = (book: Book, users: User[], reviews: Review[]): BookInformation => {
  const usersRev: { id: string; text: string; user: { id: string; name: string; }; }[] = []

  book.reviewIds.forEach((item) => {
    const review = reviews.filter(val => val.id === item)[0]
    if (review) {
      usersRev.push({
        id: review.id,
        text: review.text,
        user: {id: review.userId, name: users.filter(val => val.id === review.userId)[0].name}
      })
    }
  });

  const author = users.filter(val => val.id == book.authorId)[0]
  return {
    id: book.id,
    name: book.name || "Книга без названия",
    author: { name: author ? author.name: "", id: book.authorId },
    reviews: usersRev,
    description: book.description
  };
};

const App: FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([])
  const [reviews, setReviews] = useState<Review[]>([])
  

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      const fetchedBooks = await getBooks();
      const fetchedUsers = await getUsers();
      const fetchedReviews = await getReviews();
      setBooks(fetchedBooks);
      setUsers(fetchedUsers);
      setReviews(fetchedReviews);
      setIsLoading(false);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Мои книги:</h1>
      {isLoading && <div>Загрузка...</div>}
      {!isLoading &&
        books.map((b) => (
          <Card
            key={b.id}
            book={toBookInformation(b, users, reviews)}
          />
        )
      )
      }
    </div>
  );
};

export default App;
