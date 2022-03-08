import { useEffect, useState } from "react";
import { useLoaderData } from "remix";

export type UseEffectUnsubcriber = () => void;
export function useFirebaseLoaderData<T>(
  clientUpdater: (
    updater: (data: T) => void
  ) => UseEffectUnsubcriber
): T {
  // get the data form the sever via firebase admin
  const loaderData = useLoaderData<T>();
  const [data, setData] = useState<T>(loaderData);

  // when the client gets an update allow
  // the client to update the data
  function updater(data: T) {
    setData(data);
  }
  useEffect(() => clientUpdater(updater), [loaderData]);
  return data;
}