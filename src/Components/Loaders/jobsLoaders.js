
const jobsLoaders = async () =>{
  const loaderJobs = await fetch('jobs.json');
  const jobs = await loaderJobs.json();

  // const jobDetail = jobs.find(job => job.id === id)

  return jobs;
}


export default jobsLoaders;