import { useEffect, useState } from "react";
import Loader from "../../UI/PageLoader";
import { getUsersApi } from "../../api/apiInstance";
import { useAuthStore } from "../../store/Auth";
import { UserCard2 } from "../../UI/UserCard2";

export const AdminUserScreen = () => {
  const { token } = useAuthStore();
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getPendingWorkers() {
      setIsLoading(true);
      const usersLists = await getUsersApi(token);
      setUsersList(usersLists.data.data);
      console.log(usersList);
      setIsLoading(false);
    }
    getPendingWorkers();
  }, []);
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {usersList.map((user, index) => (
          <UserCard2 key={index} user={user} />
        ))}
      </div>
      {isLoading && <Loader />}
    </>
  );
};
