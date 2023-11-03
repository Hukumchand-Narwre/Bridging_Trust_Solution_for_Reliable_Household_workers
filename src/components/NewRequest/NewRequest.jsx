import { useEffect, useState } from "react";
import { getPendingWorkerApi } from "../../api/apiInstance";
import { useAuthStore } from "../../store/Auth";
import Button from "../../UI/Button";
import Loader from "../../UI/PageLoader";
import { useHistory } from "react-router-dom";
import Modal from "../../UI/Modal";
const NewRequest = () => {
  const { token } = useAuthStore();
  const [workerList, setWorkerList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    async function getPendingWorkers() {
      setIsLoading(true);
      const workersList = await getPendingWorkerApi(token);
      setWorkerList(workersList.data.data);
      setIsLoading(false);
    }
    getPendingWorkers();
  }, []);

  const handleViewDetail = (e) => {
    const id = e.target.getAttribute("data-id");
    history.push(`/Admin/NewRequest/${id}`);
  };

  return (
    <>
      {workerList.length > 0 ? (
        workerList?.map((worker) => (
          <div
            key={worker.id}
            className="bg-zinc-50 p-2 flex items-center justify-between mt-10"
            style={{ outline: "1px solid #4f46e5", borderRadius: 10 }}
          >
            <div className="flex items-end mb-6">
              <div
                style={{ transform: `translateY(10px)` }}
                className="w-24 h-24 relative rounded-full overflow-hidden ring-2 mr-4 ring-blue-500"
              >
                <img
                  src={worker?.photo_urls?.[0]}
                  alt={`Profile photo of ${name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <img src={worker?.photo_urls?.[0]} className="w-24  mr-4" style={{ transform: `translateY(10px)` }} /> */}
              <div className="mr-12 pr-4 border-r-2 border-rose-400">
                <h4 className="font-semibold">Full Name</h4>
                <p className="text-2xl">
                  {worker.first_name[0].toUpperCase() +
                    worker.first_name.slice(1) +
                    " " +
                    worker.last_name[0].toUpperCase() +
                    worker.last_name.slice(1)}
                </p>
              </div>
              <div className="mr-12 pr-12 border-r-2 border-rose-400">
                <h4 className="font-semibold">Gender</h4>
                <p> {worker.gender[0].toUpperCase() + worker.gender.slice(1)}</p>
              </div>
              <div className="mr-12 pr-12 border-r-2 border-rose-400">
                <h4 className="font-semibold">Type of work</h4>
                <p> {worker.type_of_work[0].toUpperCase() + worker.type_of_work.slice(1)}</p>
              </div>

              <div className="mr-12 pr-12 border-r-2 border-rose-400">
                <h4 className="font-semibold">City</h4>
                <p>{worker.city[0].toUpperCase() + worker.city.slice(1)}</p>
              </div>
              <div className="mr-12 pr-12 border-r-2 border-rose-400">
                <h4 className="font-semibold">State</h4>
                <p>{worker.state[0].toUpperCase() + worker.state.slice(1)}</p>
              </div>
              <div className="mr-12  ">
                <h4 className="font-semibold">Salary</h4>
                <p>{worker.salary}</p>
              </div>
            </div>
            <Button data-id={worker.id} className="mr-12" size="large" onClick={handleViewDetail}>
              View Details
            </Button>
          </div>
        ))
      ) : (
        <Modal route="/Admin" Heading="No Pending Request" msg="" />
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default NewRequest;
