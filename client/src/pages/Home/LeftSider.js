import React from 'react'

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:hidden">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3">
          <a href="https://www.facebook.com/sangita.bhist.9">
            <i class="ri-facebook-circle-line text-gray-500 text-xl"></i>
          </a>

          <a href="mailto:hsbisht132@gmail.com">
            <i class="ri-mail-line text-gray-500 text-xl"></i>
          </a>

          <a href="https://www.instagram.com/_.h.e.m.u_p.v.t/">
            <i class="ri-instagram-line text-gray-500 text-xl"></i>
          </a>

          <a href="https://www.linkedin.com/in/hemant-singh-bisht-424367202/">
            <i class="ri-linkedin-box-line text-gray-500 text-xl"></i>
          </a>

          <a href="https://github.com/hemu789">
            <i class="ri-github-line text-gray-500 text-xl"></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63]"></div>
      </div>
    </div>
  );
}

export default LeftSider
