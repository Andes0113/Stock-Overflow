import { useEffect, useState } from 'react';

const pHolder = [
  {
    id: 1,
    user: 'Alex',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus vel. Sit amet consectetur adipiscing elit duis tristique. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing.',
    ticker: 'AAPL',
  },
  {
    id: 2,
    user: 'Alex',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus vel. Sit amet consectetur adipiscing elit duis tristique. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing.',
    ticker: 'AAPL',
  },
  {
    id: 3,
    user: 'Alex',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus vel. Sit amet consectetur adipiscing elit duis tristique. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing.',
    ticker: 'AAPL',
  },
  {
    id: 4,
    user: 'Alex',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus vel. Sit amet consectetur adipiscing elit duis tristique. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing.',
    ticker: 'AAPL',
  },
];

const usePosts = ({ username, ticker }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  let body = {};
  if (username) body.username = username;
  if (ticker) body.ticker = ticker;

  useEffect(() => {
    setPosts(pHolder);
    setLoading(false);
  }, [username, ticker]);

  return { posts, loading };
};

export default usePosts;
