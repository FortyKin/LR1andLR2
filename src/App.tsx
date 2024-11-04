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
{/*import React, { useState, useEffect } from 'react';

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

export default App;*/}

//Лабораторна робота 8
{/*import React, { useState, useEffect } from 'react';
import { FaBars, FaTwitter, FaFacebook, FaLinkedin, FaBehance } from 'react-icons/fa';

// Определение типов
type Link = {
  id: number;
  url: string;
  text: string;
};

type SocialLink = {
  id: number;
  url: string;
  icon: JSX.Element;
};

// Данные
const links: Link[] = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: '/about', text: 'about' },
  { id: 3, url: '/projects', text: 'projects' },
  { id: 4, url: '/contact', text: 'contact' },
  { id: 5, url: '/profile', text: 'profile' },
];

const social: SocialLink[] = [
  { id: 1, url: 'https://www.facebook.com', icon: <FaFacebook /> },
  { id: 2, url: 'https://www.twitter.com', icon: <FaTwitter /> },
  { id: 3, url: 'https://www.linkedin.com', icon: <FaLinkedin /> },
  { id: 4, url: 'https://www.behance.com', icon: <FaBehance /> },
];

// Компонент Sidebar
const Sidebar: React.FC<{ links: Link[] }> = ({ links }) => {
  return (
    <div className="links-container">
      <ul className="links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Компонент SocialIcons
const SocialIcons: React.FC<{ socialLinks: SocialLink[] }> = ({ socialLinks }) => {
  return (
    <ul className="social-icons">
      {socialLinks.map((socialLink) => (
        <li key={socialLink.id}>
          <a href={socialLink.url}>{socialLink.icon}</a>
        </li>
      ))}
    </ul>
  );
};

// Главный компонент Navbar
const Navbar: React.FC = () => {
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const showMenu = () => {
      if (window.innerWidth > 800) {
        setShowLinks(true);
      } else {
        setShowLinks(false);
      }
    };

    window.addEventListener("resize", showMenu);
    showMenu(); // Вызываем функцию при монтировании компонента

    return () => window.removeEventListener("resize", showMenu);
  }, []);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src="logo.svg" alt="logo" />
          <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        {showLinks && <Sidebar links={links} />}
        <SocialIcons socialLinks={social} />
      </div>
    </nav>
  );
};

// Стили
const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
  }
  
  nav {
    background: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  
  .nav-toggle {
    font-size: 1.5rem;
    color: #49a6e9;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.3s linear;
  }
  
  .links-container {
    height: 0;
    overflow: hidden;
    transition: all 0.3s linear;
  }
  
  .show-container {
    height: auto;
  }
  
  .links a {
    color: #324d67;
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    display: block;
    padding: 0.5rem 1rem;
    transition: all 0.3s linear;
  }
  
  .links a:hover {
    background: #49a6e9;
    color: #fff;
    padding-left: 1.5rem;
  }
  
  .social-icons {
    display: none;
  }
  
  @media screen and (min-width: 800px) {
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
  
    .nav-header {
      width: auto;
    }
  
    .nav-toggle {
      display: none;
    }
  
    .links-container {
      height: auto !important;
    }
  
    .links {
      display: flex;
    }
  
    .links a {
      padding: 0;
      margin: 0 0.5rem;
    }
  
    .links a:hover {
      padding: 0;
      background: transparent;
    }
  
    .social-icons {
      display: flex;
    }
  
    .social-icons a {
      margin: 0 0.5rem;
      color: #49a6e9;
      transition: all 0.3s linear;
    }
  
    .social-icons a:hover {
      color: #324d67;
    }
  }
`;

// Рендеринг компонента и добавление стилей
const App: React.FC = () => {
  return (
    <>
      <style>{styles}</style>
      <Navbar />
    </>
  );
};

export default App;*/}

//Лабораторна робота 9. Sidebar та модальне вікно на React
{/*import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { IconType } from 'react-icons/lib';
import { 
  FaHome, 
  FaUserFriends, 
  FaFolderOpen, 
  FaCalendarAlt, 
  FaWpforms,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaBehance,
  FaBars
} from 'react-icons/fa';

// Updated interface with IconType
interface Link {
  id: number;
  url: string;
  text: string;
  icon: React.ReactElement<IconType>;
}

interface Social {
  id: number;
  url: string;
  icon: React.ReactElement<IconType>;
}

interface AppContextType {
  isModalOpen: boolean;
  isSidebarOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}

// Mock Data
const links: Link[] = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: <FaUserFriends />
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt />
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />
  }
];

const social: Social[] = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin />
  },
  {
    id: 4,
    url: 'https://www.behance.com',
    icon: <FaBehance />
  }
];

// Context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider Component
const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within an AppProvider');
  }
  return context;
};

// Components
const Home: React.FC = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        show modal
      </button>
    </main>
  );
};

const Modal: React.FC = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div className={`modal-overlay ${isModalOpen ? 'show-modal' : ''}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}>
      <div className="sidebar-header">
        <h3>Logo</h3>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>
              {link.icon} {link.text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="social-icons">
        {social.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
};

// Styles
const styles = `
  :root {
    --clr-primary: #2680c0;
    --clr-background: #f1f5f8;
    --transition: all 0.3s linear;
  }*/}

  /* Global Styles */
  {/** {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--clr-background);
    color: #102a42;
    line-height: 1.5;
    font-size: 0.875rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }*/}

  /* Main */
  {/*main {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sidebar-toggle {
    position: fixed;
    top: 2rem;
    left: 3rem;
    font-size: 2rem;
    background: transparent;
    border: transparent;
    color: var(--clr-primary);
    cursor: pointer;
    animation: bounce 2s ease-in-out infinite;
  }

  .btn {
    text-transform: uppercase;
    background: var(--clr-primary);
    color: white;
    padding: 0.375rem 0.75rem;
    letter-spacing: 0.1rem;
    font-size: 0.875rem;
    border: 2px solid var(--clr-primary);
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
    transition: var(--transition);
  }

  .btn:hover {
    background: transparent;
    color: var(--clr-primary);
  }*/}

  /* Modal */
  {/*}.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    visibility: hidden;
    z-index: -1;
  }

  .show-modal {
    visibility: visible;
    z-index: 10;
  }

  .modal-container {
    background: white;
    border-radius: 0.25rem;
    width: 90vw;
    max-width: 620px;
    height: 30vh;
    text-align: center;
    display: grid;
    place-items: center;
    position: relative;
  }

  .close-modal-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    background: transparent;
    border: transparent;
    color: #bb2525;
    cursor: pointer;
  }*/}

  /* Sidebar */
  {/*.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 1rem;
    box-shadow: 2px 0 2px rgba(0, 0, 0, 0.2);
    transition: var(--transition);
    transform: translate(-100%);
  }

  .show-sidebar {
    transform: translate(0);
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }

  .close-btn {
    font-size: 1.75rem;
    background: transparent;
    border: transparent;
    color: #bb2525;
    cursor: pointer;
  }

  .links a {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: #617d98;
    transition: var(--transition);
    letter-spacing: 0.1rem;
  }

  .links a:hover {
    background: var(--clr-background);
    color: #243a52;
    padding-left: 1.75rem;
  }

  .links a svg {
    font-size: 1.5rem;
    color: #617d98;
    margin-right: 1rem;
    transition: var(--transition);
  }

  .links a:hover svg {
    color: #243a52;
  }

  .social-icons {
    justify-self: center;
    display: flex;
    padding-bottom: 2rem;
  }

  .social-icons a {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    color: var(--clr-primary);
    transition: var(--transition);
  }

  .social-icons a:hover {
    color: #88bcee;
  }

  @media screen and (min-width: 676px) {
    .sidebar {
      width: 400px;
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

// Root component with styles
const Root: React.FC = () => {
  return (
    <AppProvider>
      <style>{styles}</style>
      <App />
    </AppProvider>
  );
};

export default Root;*/}

//Лабораторна робота 10 Кошик товарів на React
{/*import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Types
interface CartItem {
  id: string;
  title: string;
  price: number;
  img: string;
  amount: number;
}

interface AppState {
  loading: boolean;
  cart: CartItem[];
  total: number;
  amount: number;
}

type ActionType =
  | { type: 'CLEAR_CART' }
  | { type: 'REMOVE'; payload: string }
  | { type: 'INCREASE'; payload: string }
  | { type: 'DECREASE'; payload: string }
  | { type: 'GET_TOTALS' }
  | { type: 'LOADING' }
  | { type: 'DISPLAY_ITEMS'; payload: CartItem[] };

interface AppContextType extends AppState {
  clearCart: () => void;
  remove: (id: string) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
}

// Initial state
const initialState: AppState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

// Context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Reducer
function reducer(state: AppState, action: ActionType): AppState {
  switch (action.type) {
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    
    case 'REMOVE':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    
    case 'INCREASE':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        }),
      };
    
    case 'DECREASE':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: Math.max(0, item.amount - 1) };
          }
          return item;
        }).filter(item => item.amount > 0),
      };
    
    case 'GET_TOTALS':
      const { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          cartTotal.amount += amount;
          cartTotal.total += price * amount;
          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      return {
        ...state,
        total: parseFloat(total.toFixed(2)),
        amount,
      };
    
    case 'LOADING':
      return { ...state, loading: true };
    
    case 'DISPLAY_ITEMS':
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };
    
    default:
      return state;
  }
}

// Provider Component
const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const remove = (id: string) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const increase = (id: string) => {
    dispatch({ type: 'INCREASE', payload: id });
  };

  const decrease = (id: string) => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'LOADING' });
      try {
        const response = await fetch('https://course-api.com/react-useReducer-cart-project');
        const cart = await response.json();
        dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
      } catch (error) {
        console.log('Error fetching data:', error);
        dispatch({ type: 'DISPLAY_ITEMS', payload: [] });
      }
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within an AppProvider');
  }
  return context;
};

// Components
const Navbar: React.FC = () => {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3>Shopping Cart</h3>
        <div className="nav-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
          </svg>
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

const CartItem: React.FC<CartItem> = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => increase(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => decrease(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

const CartContainer: React.FC = () => {
  const { cart, total, clearCart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

// Main App Component
const App: React.FC = () => {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

// Styles
const styles = `
  :root {
    --clr-primary: #2680c0;
    --clr-background: #f1f5f8;
  }

  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--clr-background);
    color: #102a42;
  }

  
  .nav-center {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  .nav-container {
    position: relative;
  }

  .amount-container {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: var(--clr-primary);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .total-amount {
    color: white;
    font-size: 0.85rem;
  }

  
  .cart {
    min-height: calc(100vh - 120px);
    width: 90vw;
    margin: 0 auto;
    margin-top: 40px;
    padding: 2.5rem 0;
    max-width: 800px;
  }

  .cart h2 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3rem;
  }

  .empty-cart {
    text-align: center;
    text-transform: lowercase;
    margin-top: 1rem;
    color: #617d98;
  }

  
  .cart-item {
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 1.5rem;
    margin: 1.5rem 0;
  }

  .cart-item img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }

  .cart-item h4 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    letter-spacing: 2px;
  }

  .item-price {
    color: #617d98;
  }

  .remove-btn {
    color: #bb2525;
    background: transparent;
    border: transparent;
    cursor: pointer;
    font-size: 0.85rem;
    margin-top: 0.375rem;
  }

  .amount-btn {
    width: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .amount-btn svg {
    color: var(--clr-primary);
  }

  .amount {
    text-align: center;
    margin-bottom: 0;
    font-size: 1.25rem;
    line-height: 1;
  }

  hr {
    background: #617d98;
    border-color: transparent;
    border-width: 0.5px;
  }

  .cart-total {
    text-align: right;
    margin-top: 1.5rem;
    margin-right: 2rem;
  }

  .cart-total h4 {
    text-transform: capitalize;
    letter-spacing: 2px;
  }

  .cart-total span {
    padding-left: 0.5rem;
    color: var(--clr-primary);
    font-weight: bold;
  }

  .btn {
    text-transform: uppercase;
    background: var(--clr-primary);
    color: white;
    padding: 0.375rem 0.75rem;
    letter-spacing: 0.1rem;
    font-weight: 400;
    border: 2px solid var(--clr-primary);
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
    font-size: 0.875rem;
    margin: 2rem auto;
    display: block;
  }

  .loading {
    text-align: center;
    margin-top: 5rem;
  }
`;

// Root component with styles
const Root: React.FC = () => {
  return (
    <AppProvider>
      <style>{styles}</style>
      <App />
    </AppProvider>
  );
};

export default Root;*/}

//Лабораторна робота 11. Розробка і валідація форм на React
import { useForm } from "react-hook-form";

interface FormInputs {
  login: string;
  firstName: string;
  lastName: string;
}

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormInputs>({
    mode: "onSubmit"
  });

  const onSubmit = (data: FormInputs) => {
    console.log(JSON.stringify(data));
    reset({
      firstName: "Пам'ятай",
      lastName: "Про курсову роботу",
      login: ""
    });
  };

  // Regex for Latin characters only
  const latinRegex = /^[A-Za-z0-9]*$/;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-2xl font-bold text-gray-900">React Hook Form for IPZ</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Login:
              <input
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                {...register("login", {
                  required: "Поле обов'язкове для заповнення!",
                  pattern: {
                    value: latinRegex,
                    message: "Використовуйте тільки латиницю!"
                  }
                })}
              />
            </label>
            <div className="h-6">
              {errors?.login && (
                <p className="text-sm text-red-600">{errors.login.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              FirstName:
              <input
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                {...register("firstName", {
                  required: "Поле обов'язкове для заповнення!",
                  minLength: {
                    value: 5,
                    message: "Мінімальна кількість символів 5"
                  }
                })}
              />
            </label>
            <div className="h-6">
              {errors?.firstName && (
                <p className="text-sm text-red-600">{errors.firstName.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              LastName:
              <input
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                {...register("lastName", {
                  required: "Поле обов'язкове для заповнення!",
                  minLength: {
                    value: 5,
                    message: "Мінімальна кількість символів 5"
                  },
                  maxLength: {
                    value: 25,
                    message: "Максимальна кількість символів 25"
                  }
                })}
              />
            </label>
            <div className="h-6">
              {errors?.lastName && (
                <p className="text-sm text-red-600">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;


