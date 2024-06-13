import { useUser } from "@clerk/clerk-react";
import FinanceList from "./FinanceList";
import FinanceForm from "./FinanceForm";
import { useEffect } from "react";
import { useFinanceStore } from "../../context/financeContext";
import NavBar from "./NavBar";

const Dashboard = () => {
  const { user } = useUser();
  const { fetchRecords, records } = useFinanceStore();

  useEffect(() => {
    const getRecords = async () => {
      if (user?.id) {
        await fetchRecords(user.id);
      }
    };

    getRecords();
  }, [user]);

  return (
    <div>
      <NavBar></NavBar>
      <div className="m-20 mt-16">
        <h1 className="text-gray-400">
          Welcome,{" "}
          <span className="text-white text-lg font-bold relative after:w-full after:absolute after:h-1 after:-bottom-2 after:bg-violet-600 after:left-0 mx-1">
            {user?.firstName}!
          </span>{" "}
          Here are your latest finances
        </h1>
        <div className="flex gap-20 mt-14">
          <FinanceList records={records} />
          <FinanceForm />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
