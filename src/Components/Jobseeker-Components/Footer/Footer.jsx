import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 text-gray-800 font-poppins py-10 px-6 lg:px-20" id="contact">
  <div className="max-w-7xl mx-auto">
    {/* Top section */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Brand Info */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-violet-900">WorkBridge</h1>
        <p className="text-sm">Your ultimate job seeking platform. Discover, apply, and get hired faster.</p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><button className="hover:text-violet-700">Home</button></li>
          <li><button className="hover:text-violet-700">Admin</button></li>
          <li><button className="hover:text-violet-700">Jobs</button></li>
          <li><button className="hover:text-violet-700">Help Center</button></li>
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Resources</h3>
        <ul className="space-y-2 text-sm">
          <li><button className="hover:text-violet-700">Blog</button></li>
          <li><button className="hover:text-violet-700">Career Tips</button></li>
          <li><button className="hover:text-violet-700">Resume Guide</button></li>
          <li><button className="hover:text-violet-700">FAQs</button></li>
        </ul>
      </div>

      {/* Contact and Socials */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
        <p className="text-sm mb-2">support@workbridge.com</p>
        <div className="flex gap-4 mt-2 text-lg">
          <a href="#" className="hover:text-violet-700"><i className="fab fa-facebook"></i></a>
          <a href="#" className="hover:text-violet-700"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-violet-700"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="hover:text-violet-700"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t mt-10 pt-6 text-center text-xs text-gray-500">
      <p>© 2025 WorkBridge.com. All rights reserved.</p>
      <p>Trademarks and brands are the property of their respective owners.</p>
    </div>
  </div>
</div>

    </>
  )
}

export default Footer
