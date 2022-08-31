import { useEffect } from "react";
import { useGetUserTransaction } from "../../modules/transaction/transactionHooks";

export default function Home() {
  const { data } = useGetUserTransaction();
  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div className="">Home</div>;
}
