import React from 'react'
import {
	HiHome,
	HiUser,
	HiViewColumns,
	HiRectangleGroup,
	HiChatBubbleBottomCenterText,
} from 'react-icons/hi2'

interface NavData {
	id: number;
	icon: React.ReactElement;
	title: string;
	route: string;
}

export const navData: NavData[] = [{
	id: 1,
	icon: <HiHome />,
	title: 'home',
	route: '/',
},
{
	id: 2,
	icon: <HiUser />,
	title: 'about',
	route: '/about',
},
{
	id: 3,
	icon: <HiViewColumns />,
	title: 'work',
	route: '/work',
},
{
	id: 4,
	icon: <HiRectangleGroup />,
	title: 'services',
	route: '/services',
},
{
	id: 5,
	icon: <HiChatBubbleBottomCenterText />,
	title: 'contact',
	route: '/contact',
},]

const Nav = () => {
	return (
		<div>Nav</div>
	)
}

export default Nav