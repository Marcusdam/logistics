import React from 'react'
import Single1 from '../../assets/images/single 1.png'
import Single2 from '../../assets/images/single 2.png'
import Single3 from '../../assets/images/single 3.png'
import Icon from '../../assets/images/Icon (6).png'

const ServiceText = () => {
  return (
    <section className='max-w-[1024px] mx-auto px-4 lg:px-0 py-20'>
        <div>
            <div className='mt-10'>
                <img src={Single1} alt="img" />
                <div className='mt-20'>
                    <div className='flex items-center gap-3'>
                    <div>
                        <img src={Icon} alt="img"className='w-[30px]'/>
                    </div>
                    <div >
                        <h1 className='text-[#1C1F35] text-[35px] font-rubik font-semibold'>Sea Transport Services</h1>
                    </div>
                    </div>
                    <div>
                    <p className='text-[16px] text-[#666C89]  font-krub'>
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?

                Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.


                </p>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-10 mt-20'>
                <div>
                    <h1 className='text-[#1C1F35] text-[35px] font-rubik font-semibold'>Benefit of Service</h1>
                    <p className='text-[16px] text-[#666C89]  font-krub'>Sed ut perspiciatis, unde omnis iste natu volupta temaccu santium doloremque laudantium, totam rem quae ab illo inventore veritatis.</p>
                <ul className='mt-4'>
                    <li className='text-[#1C1F35] text-[16px] font-krub font-semibold'>Clearance and compliance service</li>
                    <li className='text-[#1C1F35] text-[16px] font-krub font-semibold'>Saving Time to Deal with commodo iaculis</li>
                    <li className='text-[#1C1F35] text-[16px] font-krub font-semibold'>Automate your business elis tristique</li>
                    <li className='text-[#1C1F35] text-[16px] font-krub font-semibold'>Saving Time to Deal with commodo iaculis</li>
                </ul>
                </div>

                <div>
                    <img src={Single2} alt="img" />
                </div>

            </div>

            <div className='grid md:grid-cols-2 gap-10 mt-20'>
                <div>
                    <img src={Single3} alt="img" />
                </div>
                <div>
                    <h1 className='text-[#1C1F35] text-[35px] font-rubik font-semibold'>How It Works</h1>
                    <p className='text-[16px] text-[#666C89]  font-krub'>
                    Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, doloremque laudantium.

                    Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis.
                    </p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default ServiceText