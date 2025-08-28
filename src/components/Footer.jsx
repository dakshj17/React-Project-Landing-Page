import React from 'react'
import {
    FaDribbbleSquare, FaFacebookSquare, FaGithubSquare,
    FaInstagram, FaTwitterSquare,
    } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React</h1>
      <p className='py-4'>Built with passion, trust, and innovation. Reliable, secure, and user-focused solutions to empower growth and connections worldwide.</p>
      <div className='flex justify-between md:w-[75%] my-6'>
        <FaFacebookSquare size={30}/>
        <FaInstagram size={30}/>
        <FaTwitterSquare size={30}/>
        <FaGithubSquare size={30}/>
        <FaDribbbleSquare size={30}/>
        </div>
      </div>
      <div className='lg:cols-span-2 mt-10 flex justify-between gap-20'>
        <div className='mx-10'>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
                 <li className='py-2 text-sm'>Analytics</li>
                 <li className='py-2 text-sm'>Marketing</li>
                 <li className='py-2 text-sm'>Commerce</li>
                 <li className='py-2 text-sm'>Insights</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Supports</h6>
            <ul>
                 <li className='py-2 text-sm'>Pricing</li>
                 <li className='py-2 text-sm'>Documentation</li>
                 <li className='py-2 text-sm'>Guides</li>
                 <li className='py-2 text-sm'>API Status</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
                 <li className='py-2 text-sm'>About</li>
                 <li className='py-2 text-sm'>Blog</li>
                 <li className='py-2 text-sm'>Jobs</li>
                 <li className='py-2 text-sm'>Press</li>
                 <li className='py-2 text-sm'>Careers</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
                 <li className='py-2 text-sm'>Claim</li>
                 <li className='py-2 text-sm'>Policy</li>
                 <li className='py-2 text-sm'>Terms</li>
            </ul>
        </div>
      </div>
    </div>
    
  )
}

export default Footer
