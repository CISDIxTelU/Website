import React, { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Hero, LogoCisdi } from '../../assets'
import { Menu, Transition } from '@headlessui/react'
import { FaBars, FaChevronDown } from 'react-icons/fa'

function Navbar({ name }) {
    const navigate = useNavigate();
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const logout = () => {
        localStorage.removeItem('token');
        return navigate('/');
    }

    const profile = () => {
        return navigate('/profile');
    }

    return (
        <nav className="flex flex-wrap items-center justify-between px-2 py-3 sticky z-50" style={{ backgroundColor: '#404042' }}>
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link
                        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                        to="/materi"
                    >
                        <img src={LogoCisdi} className='w-20 lg:w-27' />
                    </Link>
                    <div className='flex items-center'>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 mr-5 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <FaBars />
                    </button>
                    <div className="text-right flex lg:hidden">
                        <Menu as="div" className="relative inline-block text-left">
                            <div className='flex'>
                                <Menu.Button className="text-sm relative font-medium text-white bg-blue-200 rounded-full hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" style={{ backgroundImage: `url(${Hero})`, backgroundSize: '60px', backgroundPosition: 'center center', objectFit: 'cover', backgroundRepeat: 'no-repeat', width: '40px', height: '40px' }}>
                                </Menu.Button>
                                <FaChevronDown className='text-white relative' />
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="px-1 py-1 ">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    className={`${active ? 'bg-violet-500 text-blue-600 underline' : 'text-gray-900'
                                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                        to="/profile">
                                                    {active ? (
                                                        <EditActiveIcon
                                                            className="w-5 h-5 mr-2"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <EditInactiveIcon
                                                            className="w-5 h-5 mr-2"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                    Profile
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    <div className="px-1 py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-violet-500 text-blue-600 underline' : 'text-gray-900'
                                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                    onClick={logout}>
                                                    {active ? (
                                                        <DeleteActiveIcon
                                                            className="w-5 h-5 mr-2 text-violet-400"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <DeleteInactiveIcon
                                                            className="w-5 h-5 mr-2 text-violet-400"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                    Logout
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                    </div>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col w-full justify-around align-center lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <Link
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                to="/materi"
                            >
                                <span className="ml-2">Beranda</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                to="/history"
                            >
                                <span className="ml-2">Riwayat</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                to="/materi"
                            >
                                <span className="ml-2">Favorit</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                to="/materi"
                            >
                                <span className="ml-2">Pemberitahuan</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            {/* Profile dropdown */}
                            <div className="text-right hidden lg:inline">
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="text-sm relative font-medium text-white bg-blue-200 rounded-full hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" style={{ backgroundImage: `url(${Hero})`, backgroundSize: '60px', backgroundPosition: 'center center', objectFit: 'cover', backgroundRepeat: 'no-repeat', width: '40px', height: '40px' }}>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="px-1 py-1 ">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-violet-500 text-blue-600 underline' : 'text-gray-900'
                                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                                onClick={profile}
                                                        >
                                                            {active ? (
                                                                <EditActiveIcon
                                                                    className="w-5 h-5 mr-2"
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <EditInactiveIcon
                                                                    className="w-5 h-5 mr-2"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                            Profile
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="px-1 py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-violet-500 text-blue-600 underline' : 'text-gray-900'
                                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                            onClick={logout}>
                                                            {active ? (
                                                                <DeleteActiveIcon
                                                                    className="w-5 h-5 mr-2 text-violet-400"
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <DeleteInactiveIcon
                                                                    className="w-5 h-5 mr-2 text-violet-400"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                            Logout
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

function EditInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#9eacdb"
                stroke="#768acc"
                strokeWidth="2"
            />
        </svg>
    )
}

function EditActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#153ec2"
                stroke="#5670c7"
                strokeWidth="2"
            />
        </svg>
    )
}

function DeleteInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#9eacdb"
                stroke="#768acc"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#9eacdb" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#9eacdb" strokeWidth="2" />
        </svg>
    )
}

function DeleteActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#153ec2"
                stroke="#5670c7"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#153ec2" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#153ec2" strokeWidth="2" />
        </svg>
    )
}

export default Navbar;
