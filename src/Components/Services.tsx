import React from 'react'

const Services = () => {

    const servicesArr = ['Front-End Development', 'Back-End Development','Full-Stack Development', 'Product Development', 'Website Maintainance','Website Performance Optimization']
  return (
    <div>
        <section className="mt-12">
        <span className="inline-block h-12 translate-y-3 rotate-[-2deg] bg-[hsla(0deg,100%,40%,0.3)]"><h2 className="text-4xl font-bold translate-y-[-0.2em] text-accent rotate-3">Services</h2></span>
            <article className="grid grid-cols-2 gap-1 rounded-lg w-[90%] mt-10 services-article">
                {
                    servicesArr.map((service, index) => {
                        return(
                            <div key={index} className="bg-[hsla(0deg,0%,30%,0.2)] dark:bg-[hsla(0deg,100%,0%,0.4)] px-6 py-6 font-semibold text-lg">
                                <p>{service}</p>
                            </div>
                        )
                    }) 
                }
            </article>
        </section>
    </div>
  )
}

export default Services
