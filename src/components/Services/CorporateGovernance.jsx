import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CorporateGovernance = () => {
    const headRef = useRef(null);
    const paraRef = useRef(null);
    const listRef = useRef(null);
    const animationHasRun = useRef(false);

    useEffect(() => {
        if (!animationHasRun.current) {
            gsap.fromTo(headRef.current, {
                opacity: 0,
                y: -200,
              }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: headRef.current,
                    start: 'top 80%', // Animation starts when the element is 80% from the top of the viewport
                    once: true, // Animation happens only once
                }
            });

            gsap.fromTo(paraRef.current, {
                opacity: 0,
                x: -200,
              }, {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: paraRef.current,
                    start: 'top 80%', // Animation starts when the element is 80% from the top of the viewport
                    once: true, // Animation happens only once
                }
            });

            gsap.fromTo(
                listRef.current.children, // Target each child of the grid
                {
                    opacity: 0,
                    x: -200, // Start position (from the left)
                },
                {
                    opacity: 1,
                    x: 0, // End position (move to natural position)
                    delay: 0.4,
                    duration: 0.7,
                    ease: "power1.out",
                    stagger: 0.1, // Stagger animation by 0.2 seconds
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: 'top 90%', // Animation starts when the grid is 80% from the top
                        once: true, // Animation happens only once
                    }
                }
            );

            animationHasRun.current = true;
        }
    }, []);
    
  return (
    <div className='flex justify-center w-full'>
    <div className='pt-4 max-w-800px w-[70%] max-md:w-[90%] flex flex-col gap-4 flex-wrap mb-16'>
        <div className='mb-8'>
            <h2 className='text-buttonBlue font-bold text-5xl mb-8 max-sm:text-4xl' ref={headRef}>Corporate Governance</h2>
            <div className='flex flex-col gap-6' ref={paraRef}>
                <p className='text-text text-lg'>Corporate governance refers to a combination of laws, regulations, procedures, implicit rules and voluntary 
                    practices which help companies to perform efficiently and maximize long term value for shareholders and at the same time looking after the 
                    interests of other stakeholders like buyers, government, society at large etc. Lenders whether national or international, also look for them 
                    for taking exposure in any corporate. It is a function of transparency and fairness in operations and making proper disclosures. Company as 
                    a business organization has become popular over the years.With the growth in size of these corporates, governance has become all the more 
                    important. SEBI and listing agreements of various stock exchanges require that the requirements of corporate governance are duly complied with.</p>
                <p className='text-text text-2xl font-semibold mb-8'>Our services include:-</p>
            </div>
            <ul className='text-text text-xl list-none ml-2 flex flex-col gap-2' ref={listRef}>
                <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Periodic monitoring through internal audit</li>
                <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Independent audit</li>
                <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Independent verification</li>
                <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Effective Supervision</li>
                <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Accountability</li>
                <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Sufficient number of Independent directors on the Board</li>
                <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Formation of an independent audit committee for the board</li>
                <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Adequate disclosure and transparency in reports</li>
                <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Participation in board meetings</li>
                <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Direct and Indirect tax compliance</li>
            </ul>
        </div>
    </div>
</div>
)};

export default CorporateGovernance;
