import React, { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DummyProfile, LogoCisdi } from '../../assets'
import { Menu, Transition } from '@headlessui/react'
import { FaBars, FaChevronDown, FaRegBell, FaRegUserCircle } from 'react-icons/fa'
import {BsBoxArrowRight} from 'react-icons/bs'

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
                        <img alt='foto' src={LogoCisdi} className='w-32 lg:w-27' />
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
                                <div className='flex items-center'>
                                    <Menu.Button className="text-sm relative font-medium text-white bg-blue-200 mr-3 rounded-full hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" style={{ backgroundImage: `url(${DummyProfile})`, backgroundSize: '60px', backgroundPosition: 'center center', objectFit: 'cover', backgroundRepeat: 'no-repeat', width: '40px', height: '40px' }}>
                                        <FaChevronDown className='text-white absolute -right-5 top-3' />
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
                                                        className={`${active ? ' text-red-600 underline' : 'text-gray-900'
                                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                        onClick={profile}
                                                    >
                                                        Buka Profil Diri
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        <div className="px-1 py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${active ? 'text-red-600 underline' : 'text-gray-900'
                                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                        onClick={() => navigate('/materi')}>
                                                        {active ? (
                                                            <FaRegBell
                                                                className="w-5 h-5 mr-2 text-red-400"
                                                                aria-hidden="true"
                                                            />
                                                        ) : (
                                                            <FaRegBell
                                                                className="w-5 h-5 mr-2"
                                                                aria-hidden="true"
                                                            />
                                                        )}
                                                        Pemberitahuan
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        <div className="px-1 py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${active ? ' text-red-600 underline' : 'text-gray-900'
                                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                        onClick={logout}>
                                                        Keluar
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
                                to="/courses"
                            >
                                <span className="ml-2 text-xl">Beranda</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                to="/history"
                            >
                                <span className="ml-2 text-xl">Riwayat</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                to="/favourite"
                            >
                                <span className="ml-2 text-xl">Favorit</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            {/* Profile dropdown */}
                            <div className="text-right hidden lg:inline">
                                <Menu as="div" className="relative inline-block text-left">
                                    <div className='flex items-center'>
                                        <Menu.Button className="text-sm relative font-medium text-white bg-blue-200 mr-3 rounded-full hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" style={{ backgroundImage: `url(${DummyProfile})`, backgroundSize: '60px', backgroundPosition: 'center center', objectFit: 'cover', backgroundRepeat: 'no-repeat', width: '40px', height: '40px' }}>
                                            <FaChevronDown className='text-white absolute -right-5 top-3' />
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
                                                            className={`${active ? 'text-red-600 underline' : 'text-gray-900'
                                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                            onClick={profile}
                                                        >
                                                            {active ? (
                                                                <FaRegUserCircle
                                                                    className="w-5 h-5 mr-2 text-red-400"
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <FaRegUserCircle
                                                                    className="w-5 h-5 mr-2"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                            Buka Profil Diri
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="px-1 py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'text-red-600 underline' : 'text-gray-900'
                                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                            onClick={() => navigate('/announcement')}>
                                                            {active ? (
                                                                <FaRegBell
                                                                    className="w-5 h-5 mr-2 text-red-400"
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <FaRegBell
                                                                    className="w-5 h-5 mr-2"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                            Pemberitahuan
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="px-1 py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'text-red-600 underline' : 'text-gray-900'
                                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                            onClick={logout}>
                                                                {active ? (
                                                                <BsBoxArrowRight
                                                                    className="w-5 h-5 mr-2 text-red-400"
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <BsBoxArrowRight
                                                                    className="w-5 h-5 mr-2"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                            Keluar
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

export default Navbar;
