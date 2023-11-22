import { useEffect, useState } from "react";
import UserCard from "../../UI/UserCard"; // Import your UserCard component
import Loader from "../../UI/PageLoader";
import { getCompletedworkerApi } from "../../api/apiInstance";
import { useAuthStore } from "../../store/Auth";
export const AdminWorkerScreen = () => {
  const { token } = useAuthStore();
  const [workerList, setWorkerList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getPendingWorkers() {
      setIsLoading(true);
      const workersList = await getCompletedworkerApi(token);
      setWorkerList(workersList.data.data);
      console.log(workerList);
      setIsLoading(false);
    }
    getPendingWorkers();
  }, []);
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {workerList.map((worker, index) => (
          <UserCard key={index} user={worker} showHire={false} />
        ))}
      </div>
      {isLoading && <Loader />}
    </>
  );
};
