import { getShoppingCart } from "../utilities/fakedb";

const jobsLoaders = async () =>{
  const loaderJobs = await fetch('jobs.json');
  const jobs = await loaderJobs.json();

  const storedJobCart = getShoppingCart();
  const saveJobCart = []

  for (const id in storedJobCart) {
    const addedJob = jobs.find((jb) => jb.id.toString() === id.toString());
    if (addedJob) {
      const quantity = storedJobCart[id];
      addedJob.quantity = quantity;
      saveJobCart.push(addedJob);
    }
  }
  return saveJobCart;
}

export default jobsLoaders;