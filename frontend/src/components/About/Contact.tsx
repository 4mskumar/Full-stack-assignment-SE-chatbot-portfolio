import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className='w-full px-80 py-20 bg-zinc-900 flex justify-between gap-10 items-start'>
        <div className='w-1/2 '>
            <h1 className='text-6xl font-bold text-white text-left font-inter tracking-tighter'>Let's build the future togethere</h1>
        </div>
        <div>
            <form className='flex flex-col gap-10'>
                <div className='flex gap-10'>
                    <input required className='border-b-2 rounded-md placeholder:text-zinc-700 outline-none border-black px-7 py-3 placeholder:text-sm font-inter text-black' placeholder='First name' type="text" name="" id="" />
                    <input required className='border-b-2 rounded-md placeholder:text-zinc-700 outline-none border-black px-7 py-3 placeholder:text-sm font-inter text-black' placeholder='Last name' type="text" name="" id="" />
                </div>
                <div className='flex flex-col gap-10'>
                    <input required className='border-b-2 rounded-md placeholder:text-zinc-700 outline-none border-black px-7 py-3 placeholder:text-sm font-inter text-black' type="email" placeholder='Email' name="" id="" />
                    <select className='outline-none border-b-2 rounded-md placeholder:text-zinc-700 border-black px-7 py-3 placeholder:text-sm font-inter text-zinc-700 pr-10' required name="" id="">
                        <option className='text-sm text-zinc-700' value="1">Select a service</option>
                        <option className='text-sm text-zinc-700' value="2">Web Design</option>
                        <option className='text-sm text-zinc-700' value="3">Frontend Development</option>
                        {/* <option value="4">Mobile Development</option> */}
                        <option value="5">UI/UX Design</option>
                        <option value="6">SEO</option>
                    </select>
                    <textarea className='resize-none outline-none rounded-md placeholder:text-zinc-700 border-black px-7 py-3 placeholder:text-sm font-inter text-black' type="text" placeholder='Project description' name="" id="" />
                    <button className='bg-blue-600 hover:bg-blue-500 duration-300 ease-in-out transition-all text-sm font-semibold tracking-tighter font-inter text-white px-5 py-2 rounded-md w-fit'>Submit</button>

                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact