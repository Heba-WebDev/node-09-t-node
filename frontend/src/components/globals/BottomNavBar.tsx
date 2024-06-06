import { FaHome, FaUserCircle, FaSignInAlt } from 'react-icons/fa'
import { FaCalendarCheck } from 'react-icons/fa6'
import { useLocation } from 'react-router-dom'
import { userState } from '@/state/user'



export const BottomNavBar = () => {
    const token = userState((store) => store.token)
    const navItems=[
        {
            name:'Home',
            icon:<FaHome />,
            path:'/home'
        },
        {
            name:'Mis reservaciones',
            icon: <FaCalendarCheck />,
            path:'/services',
        },
        {
            name:'',
            icon: token ? <FaUserCircle /> : <FaSignInAlt />,
            path: token ? '/profile' : '/register'

        },
    ]

    const currentRoute=useLocation()

    return (
        <div className='sm:hidden justify-around py-3 border-t border-purple-200 flex 
                             fixed bottom-0 bg-gray-900 w-full -ml-2'>
            {
                navItems.map((item)=>{
                    return (
                        <div key={item.name} className=" w-3/12">
                            <a href={item.path}>
                                <div className={`flex items-center py-2 px-4 justify-center
                                                        ${currentRoute.pathname===item.path &&
                                                        'rounded-full bg-gradient-to-r from-purple-400 to-indigo-600 h-10 w-10 mx-auto flex items-center justify-center px-0 py-0'}
                                                `}>
                                    <span className={`inline text-2xl ${currentRoute.pathname===item.path && 'ml-2'}`}>{item.icon}</span>
                                    <span className={`ml-2 ${currentRoute.pathname===item.path ? 'block' : 'hidden'}`}>
                                        {item.name}</span>
                                </div>
                            </a>
                        </div>
                    )
                })
            }                 
        </div>
    )
}
