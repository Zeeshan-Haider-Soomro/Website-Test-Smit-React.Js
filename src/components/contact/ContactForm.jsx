import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <div class="max-w-4xl mx-auto font-[sans-serif] p-6 m-5">
      <div class="text-center mb-16">
        <a href="javascript:void(0)"><img
          src="../images/logo.svg" alt="logo" class='w-52 inline-block' />
        </a>
        <h4 class="text-gray-800 text-base font-semibold mt-6">Sign up into your account</h4>
      </div>

      <form>
        <div class="grid sm:grid-cols-2 gap-8">
          <div>
            <label class="text-gray-800 text-sm mb-2 block">First Name</label>
            <input name="name" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter name" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Last Name</label>
            <input name="lname" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter last name" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Email Id</label>
            <input name="email" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Mobile No.</label>
            <input name="number" type="number" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter mobile number" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Password</label>
            <input name="password" type="password" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter password" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Confirm Password</label>
            <input name="cpassword" type="password" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter confirm password" />
          </div>
        </div>

        <div class="!mt-12">
          <button type="button" class="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
            Sign up
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default ContactForm