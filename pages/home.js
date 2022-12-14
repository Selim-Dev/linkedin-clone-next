import Image from 'next/image';
import React from 'react';
import HeaderLink from '../components/HeaderLink';
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Head from 'next/head';
const home = () => {
	return (
		<div className='relative space-y-10'>
			<Head>
			<title>LinkedIn</title>
			</Head>
			<header className='flex items-center justify-around py-4'>
				<div className='relative h-10 w-36'>
					<Image src="/linkedin-logo.png" layout="fill" objectFit="contain" />
				</div>
				<div className="flex divide-gray-300 flex-center sm:divide-x">
					<div className="hidden pr-4 space-x-8 sm:flex">
						<HeaderLink feed={true} Icon={ExploreIcon} text="Discover" />
						<HeaderLink Icon={GroupIcon} text="People" />
						<HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
						<HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
					</div>
					<div className="pl-4">
						<button className='text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2'>Sign in</button>
					</div>
				</div>
			</header>
			<main className='flex flex-col items-center max-w-screen-lg mx-auto xl:flex-row'>
				<div className="mt-8 space-y-6 xl:space-y-10">
					<h1 className="text-xl md:text-3xl xl:text-5xl text-amber-800/80 max-w-2xl !leading-snug pl-4 xl:pl-0">
						Welcome to your professional community
					</h1>
					<div className="space-y-4">
						<div className="intent">
							<h2 className="text-xl">Search for a job</h2>
							<ArrowForwardIosRoundedIcon className="text-gray-700" />
						</div>
						<div className="intent">
							<h2 className="text-xl">Find a person you know</h2>
							<ArrowForwardIosRoundedIcon className="text-gray-700" />
						</div>
						<div className="intent">
							<h2 className="text-xl">Learn a new skill</h2>
							<ArrowForwardIosRoundedIcon className="text-gray-700" />
						</div>
					</div>
				</div>
				<div className='relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px]  top-14 right-5'>
				<Image src="/linkedin-home.svg" alt="" layout="fill" priority />
				</div>
			</main>
		</div>
	);
};

export default home;