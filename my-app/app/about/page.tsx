import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaFigma,
} from 'react-icons/fa'
import {
	SiFramer,
	SiAdobephotoshop,
} from 'react-icons/si'

interface AboutData {
	title: string,
	info: {
		title: string,
		icons: React.ReactElement[],
	}[]
}

const aboutData: AboutData[] = [
	{
		title: 'skills',
		info: [
			{
				title: 'Web Development',
				icons: [
					<FaHtml5 />,
					<FaCss3 />,
					<FaJs />,
					<FaReact />,
					<SiFramer />,
				],
			},
			{
				title: 'Design',
				icons: [
					<FaFigma />,
					<SiAdobephotoshop />,
				],
			},
		]
	}
]

const About = () => {
  return (
	<div>About</div>
  )
}

export default About