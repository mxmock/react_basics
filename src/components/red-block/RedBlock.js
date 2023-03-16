import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneTodo, getTodos } from "../../redux/reducers/todo.slice";
import mc from "./red-block.module.scss";

const RedBlock = () => {
  const dispatch = useDispatch();

  const { todos, loading } = useSelector((store) => store.todo);

  useEffect(() => {
    dispatch(getOneTodo(3));
  }, []);

  return (
    <div className={mc.container}>
      <p>red block</p>

      {loading ? (
        <p>Chargement des todos...</p>
      ) : (
        <ul>
          {todos.map((t) => (
            <li key={t.id}>{t.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RedBlock;
