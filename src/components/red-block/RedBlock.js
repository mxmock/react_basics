import { useEffect } from "react";
import mc from "./red-block.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getOneTodo, getTodos } from "../../redux/reducers/todo.slice";

const RedBlock = () => {
  const dispatch = useDispatch();

  const { todos, loading } = useSelector((store) => store.todo);

  const showOne = (id) => {
    dispatch(getOneTodo(id));
  };

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div className={mc.container}>
      <p>red block</p>

      {loading ? (
        <p>Chargement des todos...</p>
      ) : (
        <ul>
          {todos.map((t) => (
            <li
              id={t.id}
              key={t.id}
              onClick={() => showOne(t.id)}
            >
              {t.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RedBlock;
