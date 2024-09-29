{/*import React, { useState } from 'react';
import data from './data';
import List from './List';
import { Person } from './types';

const App: React.FC = () => {
  const [people, setPeople] = useState<Person[]>(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import { Tour } from './types';

const url = 'https://course-api.com/react-tours-project';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [tours, setTours] = useState<Tour[]>([]);

  const removeTour = (id: string) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;*/}
{/*import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import { Tour } from './types';
import localData from './data2';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [tours, setTours] = useState<Tour[]>([]);

  const removeTour = (id: string) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = () => {
    setLoading(true);
    // Имитация асинхронной загрузки данных
    setTimeout(() => {
      setTours(localData);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;*/}

//Лабораторна робота 3
{/*import React from 'react';
import Review from './Review';

const App: React.FC = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default App;*/}

//Лабораторна робота 4
{/*import React, { useState } from 'react';
import data from './data4';
import SingleQuestion from './Question';

const App: React.FC = () => {
  const [questions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default App;*/}

//Лабораторна робота 5
{/*import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import { items, MenuItem } from './data5+type';

const App: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(items);

  const allCategories = ['all', ...new Set(items.map((item) => item.category))];
  const [categories] = useState<string[]>(allCategories);

  const filterItems = (category: string) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;*/}

//Лабораторна робота 6
{/*import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

interface Person {
  id: number;
  image: string;
  name: string;
  title: string;
  quote: string;
}

const data: Person[] = [
  {
    id: 1,
    image: 'https://www.course-api.com/images/people/person-1.jpeg',
    name: 'maria ferguson',
    title: 'office manager',
    quote: 'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
  },
  {
    id: 2,
    image: 'https://www.course-api.com/images/people/person-4.jpeg',
    name: 'john doe',
    title: 'regular guy',
    quote: 'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
  },
  {
    id: 3,
    image: 'https://www.course-api.com/images/people/person-3.jpeg',
    name: 'peter smith',
    title: 'product designer',
    quote: 'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
  },
];

const App: React.FC = () => {
  const [people] = useState<Person[]>(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => (oldIndex + 1) % people.length);
    }, 3000);
    return () => clearInterval(slider);
  }, [index, people.length]);

  const { image, name, title, quote } = people[index];

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        <article>
          <img src={image} alt={name} className="person-img" />
          <h4>{name}</h4>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>
        </article>
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default App;*/}


//Лабораторна робота 7
import React, { useState, useEffect } from 'react';

interface TodoItem {
  id: string;
  title: string;
}

interface AlertProps {
  show: boolean;
  msg: string;
  type: 'success' | 'danger';
}

const App: React.FC = () => {
  const getLocalStorage = (): TodoItem[] => {
    let list = localStorage.getItem('list');
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };

  const [name, setName] = useState<string>('');
  const [list, setList] = useState<TodoItem[]>(getLocalStorage());
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editID, setEditID] = useState<string | null>(null);
  const [alert, setAlert] = useState<AlertProps>({ show: false, msg: '', type: 'success' });

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'please enter value', 'danger');
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'value changed', 'success');
    } else {
      showAlert(true, 'item added to the list', 'success');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };

  const showAlert = (show: boolean = false, msg: string = '', type: 'success' | 'danger' = 'success') => {
    setAlert({ show, msg, type });
  };

  const clearList = () => {
    showAlert(true, 'empty list', 'danger');
    setList([]);
  };

  const removeItem = (id: string) => {
    showAlert(true, 'item removed', 'danger');
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id: string) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem?.title || '');
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} />}
        <h3>todo list</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
};

const Alert: React.FC<AlertProps> = ({ type, msg }) => {
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

const List: React.FC<{ items: TodoItem[]; removeItem: (id: string) => void; editItem: (id: string) => void }> = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="grocery-item" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button type="button" className="edit-btn" onClick={() => editItem(id)}>
                Edit
              </button>
              <button type="button" className="delete-btn" onClick={() => removeItem(id)}>
                Delete
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default App;