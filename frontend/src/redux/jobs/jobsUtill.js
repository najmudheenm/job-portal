export const  deleteJob =(jobsItems,currentJobId)=>{
    return jobsItems.filter(job=>job._id!=currentJobId)

}