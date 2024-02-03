import StatsComponent from "./statsComponent"

const Stats = ()=>{
return(
    <section className="lg:px-20  my-10 mx-3 flex flex-col justify-center gap-10 items-center  ">
        <div className=" lg:w-2/3 ">
            <p className="features_title ">
            Indias Business Payment Platform Trusted By Millions Of Businesses
            </p>
        </div>
        <div className="px-10">
            <StatsComponent />
        </div>
    </section>
)
}

export default Stats;