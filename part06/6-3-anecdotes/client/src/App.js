import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteForAnecdote, createAnecdote } from './reducers/anecdoteReducer';

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const create = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value === '') return;
    dispatch(createAnecdote(e.target.content.value));
    e.target.content.value = '';
  };
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(voteForAnecdote(anecdote.id))}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={create}>
        <div>
          <input name='content' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  );
};

export default App;