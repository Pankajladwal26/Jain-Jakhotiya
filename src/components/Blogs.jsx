import React from 'react';

const Blogs = () => {
  return (
    <div className='flex justify-center w-full'>
        <div className='pt-4 max-w-800px w-[80%] flex flex-col gap-4 flex-wrap mb-10'>
            <div className='flex flex-col justify-center mb-8'>
                <h1 className='text-h2 font-bold text-5xl mb-1 max-sm:text-4xl'>GST Enrollment</h1>
                <p className='text-text mb-6 ml-1'>By Madhusudan Jain on Jan 21, 2017, 12:00 AM</p>
            </div>
            <div className='flex flex-col mb-8'>
                <p className='text-text font-semibold text-xl mb-4'>Provisional registration to existing tax payers:-</p>
                <p className='text-lg text-text'>Every person who is registered under existing law will 
                    be granted registration on provisional basis. The enrolment has already started for State VAT from different dates all over 
                    India. The enrolment is nothing but a process to gather the information of existing tax payers in a one pool. The data collected
                    shall be used to provide provisional certificate.</p>
            </div>
            <div className='flex flex-col mb-8'>
                <p className='text-text font-semibold text-xl mb-4'>Registration of existing tax payers under GST law</p>
                <p className='text-lg text-text'>On the appointed day (Expected to be 01-07-2017), every person who is <span className='font-semibold'>
                    registered under any of the earlier laws</span> (e.g. Service tax, Excise, State VAT, Luxury tax, etc.) and having  a 
                    <span className='font-semibold'> valid  PAN </span> shall  be  granted a registration  on  a <span className='font-semibold'> 
                    provisional basis </span> and <span className='font-semibold'> certificate of registration in FORM GST REG-21.</span> Every person 
                    who has been granted the provisional registration shall submit an application electronically in <span className='font-semibold'> 
                    FORM GST REG-20 </span> duly signed along with documents specified in such form within <span className='font-semibold'> 6 Months 
                    </span> from the date of issue of provisional certificate. On the basis of documents furnished, the proper officer may issue the 
                    Final certificate of registration under <span className='font-semibold'> Form GST REG-06.</span> The same shall be available on the 
                    common portal.</p>
            </div>
            <div className='flex flex-col mb-8'>
                <p className='text-text font-semibold text-xl mb-4'>Cancellation of provisional certificate</p>
                <p className='text-lg text-text'>The tax payer shall be issued a provisional certificate. If he is not liable to be registered under
                    GST, then he may file an application under Form GST REG 24 at the common portal that he is not liable to be registered under GST 
                    and the proper officer may, after conducting such enquiry, cancel the provisional certificate.</p>
            </div>
            <div className='flex flex-col mb-8'>
                <p className='text-text font-semibold text-xl mb-4'>Opt for Composition scheme</p>
                <p className='text-lg text-text'>A  person  to  whom  a  certificate  of  registration  has  been  issued  on  a  provisional basis
                    and who is eligible to pay tax under section 9, may opt to do so while filing the application for final registration.</p>
            </div>
            <div className='flex flex-col mb-8'>
                <p className='text-text font-semibold text-xl mb-4'>Fresh Registration under GST law:</p>
                <p className='text-text font-semibold text-xl mb-4'>Person liable to be registered under GST:</p>
                <p className='text-lg text-text'>A person having <span className='font-semibold'> aggregate turnover </span> of INR 20 Lakhs or more during the financial year shall be 
                    required to be registered under GST. This limit is reduced to INR 10 Lakhs for special category states. Registration application shall
                    be filed within 30 days from the date such person becomes liable to be registered.</p>
            </div>
            <hr />
            <div className='flex flex-col justify-center mb-8 mt-8'>
                <h1 className='text-h2 font-bold text-5xl mb-1 max-sm:text-4xl'>Filing of ST -3 Half yearly return 2016-17- Need some correction</h1>
                <p className='text-text mb-6 ml-1'>By Madhusudan Jain on Oct 25, 2016, 12:00 AM</p>
            </div>
            <div className='flex flex-col mb-8'>
                <p className='text-text font-semibold text-xl mb-4'>Provisional registration to existing tax payers:-</p>
                <p className='text-lg text-text'>While the assessee logs in the ACES site for filing the Service tax Return of the I half of 2016-17 i.e. for the 6 months ended 
                    30.09.2016 and clicks the "RETâ€, in the â€˜drop downâ€™ menu the following options appear: "Fill ST â€“ 3 (for Oct â€“ Mar 2013)â€ and "Fill St â€“ 3 
                    (upto Oct â€“ Mar 2012)â€ in addition to â€˜Revise ST 3â€™ and â€˜Complete ST 3â€™. There is no option for filing return for the period from April 2016 to 
                    September 2016 or any other period. However if any one of the "FILLâ€ is clicked it goes to the current year return form ST 3.</p>
                <p className="text-text text-lg mb-6">It may be due to non-updation of the menu after first introduction of the e-filing in 2012. It is to be updated so that assessees can 
                    start filing the return without any confusion. At times the options are clogged together and the assessees are not able to select the option.</p>
                <p className="text-lg text-text">In the last page of the return the site insists the assessee who is filing his/her own return in individual capacity to select the 
                    option "I have been authorized as a person to file the return on behalf of the Service Provider/Service Receiver/Input Service Distributor as the case may beâ€. 
                    Also in addition to other four options as to â€˜maintenance of Books of Accountâ€™, â€˜availing of CENVAT Creditâ€™, â€˜Payment of taxes within time or paid with
                    interestâ€™ and â€˜filing of return within the prescribed time and if not paid the late filing feesâ€™: In my opinion while the assessee himself files the Return,
                    the above clause is to be modified suitably since he/she himself cannot authorize himself/herself</p>
            </div>
        </div>
    </div>
)};

export default Blogs;
