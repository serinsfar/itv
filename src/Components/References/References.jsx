import React from 'react';
import organisation from '../../assets/organisation.jpg'

const References = () => {
  return (
    <div className='grid grid-cols-5'>                                    
<div className='container pl-45 col-start-2 col-span-5 pb-10'>
<h1 className='pt-20 text-3xl font-bold text-left'>References</h1>
<div className='py-20'>
<img src ={organisation} alt=""/>
</div>
<h2 className=' pt-5 text-3xl font-bold text-left'>Intoduction:</h2>
<p className='p-5'>Organisational development aims to increase the productivity of the organisation and to encourage the evolvement 
    of the individual in the organisation. In a rapidly changing environment as we face it today, a continuously changing organisation 
    due to new facts is fundamental. Out of the experience of numerous projects we learned, that a successful restructuring needs the involvement of all participants.</p>
     <h2 className=' pt-5 text-3xl font-bold text-left'>Projects:</h2>
     <div className='p-5'>
      <ul>
         
          <li>- Analysis: We analyse as external observer your organisation and identify strengths, weaknesses and potentials for optimisation.
             Besides organisational aspects we also take into account economical and technical aspects;</li>
          <li>- Conception: With the findings of the analysis we establish a concept showing the direction in which the organisation should develop.
             We consider it important not to establish the concept on our own, but to involve you as our customer and your employees in each phase. 
             This is needed as only a new organisation with a wide acceptance can be implemented successfully. The concept will be followed by tangible measures.</li>
          <li>- External point of view through our independent consultants;</li>
          <li>- Implementation: We accompany you and your employees during the implementation as coaches and/or as leading figures.Prior to the organisational development
             a strategy development is recommended to make the focus of the change process clear for everyone.</li>
          </ul></div>

          <h2 className=' pt-5 text-3xl font-bold text-left'>Solutions:</h2>
        <p className='p-5'>We proceed along the following phases:</p>
        <div className='p-5'>
      <ul>
         
          <li>- Your organization is prepared for the challenges of the future.</li>
          <li>- Your organisation becomes a “learning organisation”, as every participant has internalised the change process;</li>
          <li>- Your organisation is able to execute their tasks efficiently and effectively. With that you can save money and lessen frictions .</li>
        </ul>
</div>

</div>
</div>
  )
}

export default References