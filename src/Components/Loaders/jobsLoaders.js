import { getShoppingCart } from "../utilities/fakedb";

const jobsLoaders = async () =>{
  const loaderJobs = await fetch('jobs.json');
  const jobs = await loaderJobs.json();
  const details = getShoppingCart()
  console.log(details);
  const detail = [];
  for(const id in details){
    const selectedJob = details.find(job => job.id === id)
    detail.push = selectedJob
  }
  console.log(detail);
  // const selectedJobDetail = [];
  // for(const id in jobs){
  //   const selectedJob = jobs.find(job => job.id === id)
  //   selectedJobDetail.push = selectedJob
  // }
  // console.log(jobs);
  return {jobs , detail};
}


export default jobsLoaders;