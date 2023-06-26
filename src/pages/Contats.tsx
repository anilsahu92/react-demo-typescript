import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserRequest } from "../redux/reduser/user/userReduser";
import { RootState } from "../redux/store";
import SimgleUser, { User } from "../components/SingleUser";

interface Props {}

const Contacts = (props: Props) => {
  //const {} = props;
  //const [user, setTodo] = useState<any[]>([]);
  const { data, loading } = useSelector((store: RootState) => store.users);
  const dispatch = useDispatch();
  console.log("users", data);

  useEffect(() => {
    dispatch(getUserRequest());
  }, [dispatch]);

  return (
    <div className="">
      <h2>Contacts</h2>
      <div className="TodoList">
        {loading && "Loaging..."}
        {data && data.length > 0 ? (
          data.map((item: User) => <SimgleUser key={item.id} data={item} />)
        ) : (
          <p className="text-center">No item Found</p>
        )}
      </div>
    </div>
  );
};

export default Contacts;
