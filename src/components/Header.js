import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const nav = [
  {
    title: 'Home',
    url: '/',
    active: true
  },
  {
    title: 'Popular',
    url: '/popular',
    active: false
  },
  {
    title: 'Browse',
    url: '/browse',
    active: false
  }
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const profileToggle = useRef()
  const mobileMenuToggle = useRef()

  const handleKeydown = (e) => {
    if (e.keyCode === 27) {
      setIsOpen(false)
    }
  }

  const handeleClick = (e) => {
    if (profileToggle && profileToggle.current) {
      if (e.target === profileToggle.current) return
      if (profileToggle.current.contains(e.target)) return
    }    
    if (mobileMenuToggle && mobileMenuToggle.current) {
      if (e.target === mobileMenuToggle.current) return
      if (mobileMenuToggle.current.contains(e.target)) return
    }
    setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown)
    document.addEventListener('click', handeleClick)

    return () => {
      document.removeEventListener('keydown', handleKeydown)
      document.removeEventListener('click', handeleClick)
    }
  }, [])

  return (
    <nav className="bg-discord-200">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="flex items-center justify-between h-16 sm:h-20">
              <div className="flex items-center">
                <a
                  href="#"
                  className="flex-shrink-0 block no-underline text-current"
                >
                  <motion.img
                    className="block h-8 sm:h-10 w-auto"
                    src="/dslogo.png"
                    alt=""
                    whileHover={{
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </a>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex">
                    {nav.map(({ title, url }, i) => (
                      <Link href={url} key={i}>
                        <a className="ml-6 py-3 rounded-md text-base font-medium leading-5 text-gray-300 hover:text-white focus:outline-none focus:text-white transition duration-150 ease-in-out relative fancy-underline">
                          {title}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                {authenticated ? (
                  <div className="flex items-center">
                    <button className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-discord-500 transition duration-150 ease-in-out">
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </button>
                    <div className="ml-3 relative">
                      <div>
                        <button
                          ref={profileToggle}
                          onClick={() => setIsOpen(!isOpen)}
                          className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                        >
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </button>
                      </div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ ease: 'easeInOut' }}
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                          >
                            <div className="py-1 rounded-md bg-discord-400 shadow-xs">
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm leading-5 text-white hover:bg-discord-500 focus:outline-none focus:bg-discord-500 transition duration-150 ease-in-out"
                              >
                                Your Profile
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm leading-5 text-white hover:bg-discord-500 focus:outline-none focus:bg-discord-500 transition duration-150 ease-in-out"
                              >
                                Settings
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm leading-5 text-white hover:bg-discord-500 focus:outline-none focus:bg-discord-500 transition duration-150 ease-in-out"
                              >
                                Sign out
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ) : (
                  <div>
                    <button
                      className="ml-6 py-3 rounded-md text-base font-medium leading-5 text-gray-300 hover:text-white focus:outline-none focus:text-white transition duration-150 ease-in-out relative fancy-underline"
                      onClick={() => setAuthenticated(true)}
                    >
                      Login
                    </button>
                  </div>
                )}
              </div>
              <div className="-mr-2 flex sm:hidden">
                <button
                  ref={mobileMenuToggle}
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-discord-500 focus:outline-none focus:bg-discord-500 focus:text-white transition duration-150 ease-in-out"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className={isOpen ? 'hidden' : 'inline-flex'}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                    <path
                      className={!isOpen ? 'hidden' : 'inline-flex'}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden origin-top"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut' }}
          >
            <div className="px-2 pt-2 pb-3">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-discord-400 focus:outline-none focus:text-white focus:bg-discord-500 transition duration-150 ease-in-out"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-discord-500 focus:outline-none focus:text-white focus:bg-discord-500 transition duration-150 ease-in-out"
              >
                Team
              </a>
              <a
                href="#"
                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-discord-500 focus:outline-none focus:text-white focus:bg-discord-500 transition duration-150 ease-in-out"
              >
                Projects
              </a>
              <a
                href="#"
                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-discord-500 focus:outline-none focus:text-white focus:bg-discord-500 transition duration-150 ease-in-out"
              >
                Calendar
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-discord-500">
              {authenticated ? (
                <>
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-6 text-white">
                        Tom Cook
                      </div>
                      <div className="text-sm font-medium leading-5 text-gray-400">
                        tom@example.com
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 px-2">
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-discord-500 focus:outline-none focus:text-white focus:bg-discord-500 transition duration-150 ease-in-out"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-discord-500 focus:outline-none focus:text-white focus:bg-discord-500 transition duration-150 ease-in-out"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-discord-500 focus:outline-none focus:text-white focus:bg-discord-500 transition duration-150 ease-in-out"
                    >
                      Sign out
                    </a>
                  </div>
                </>
              ) : (
                <div className="px-2">
                  <button
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-discord-500 focus:outline-none focus:text-white focus:bg-discord-500 transition duration-150 ease-in-out"
                    onClick={() => setAuthenticated(true)}
                  >
                    Log in
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Header
