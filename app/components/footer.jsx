// @flow strict
import Link from 'next/link'
import { CgGitFork } from 'react-icons/cg'
import { IoStar } from 'react-icons/io5'

function Footer() {
  return (
    <div className="relative border-t border-[#353951] bg-[#0d1224] text-white">
      <div className="mx-auto px-6 py-6 sm:px-12 lg:max-w-[70rem] lg:py-10 xl:max-w-[76rem] 2xl:max-w-[92rem]">
        <div className="-z-40 flex justify-center">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* <p className="text-sm">
            © Developer Portfolio by{' '}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/hai-vu-thien-865a62209/"
              className="text-[#16f2b3]"
            >
              Vu Thien Hai
            </Link>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Footer
