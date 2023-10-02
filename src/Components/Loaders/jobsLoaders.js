import { getShoppingCart } from "../utilities/fakedb";

const jobsLoaders = async () =>{
  const loaderJobs = await fetch('jobs.json');
  const jobs = await loaderJobs.json();

    // const jobDetail = jobs.find(job => job.id === id)
  const storedJobCart = getShoppingCart();
  // console.log(storedJobCart);
  const saveJobCart = []
  for(const id in storedJobCart){
    const addedJobs = jobs.find(jb => jb.id === id)
    if(addedJobs){
      const quantity = storedJobCart[id]
      addedJobs.quantity = quantity;
      saveJobCart.push(addedJobs)
    }
  }
  return saveJobCart;
}


export default jobsLoaders;