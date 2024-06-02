'use client'
import { useState } from 'react'
import Navbar from '@/components/navbar'


export default function Team() {
    return (
        <div className="bg-white">
            <Navbar />
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl py-20 sm:py-48 lg:py-56">

                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Team
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Our team consists of three members. We are all students at the University of The African Leadership University, Rwanda.  We are passionate about data science and machine learning. We are excited to work on this project and we hope to learn a lot from it.
                        </p>

                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>

            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-8 mx-auto">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Team</h2>

                    <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="w-full max-w-xs text-center">
                            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://avatars.githubusercontent.com/u/109791374?v=4" alt="avatar" />

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Ruth Senir Biney</h3>
                                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">ML Engineer </span>
                            </div>
                        </div>

                        <div className="w-full max-w-xs text-center">
                            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://avatars.githubusercontent.com/u/109422686?v=4" alt="avatar" />

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Joak Buoy Gai</h3>
                                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">ML Engineer</span>
                            </div>
                        </div>

                        <div className="w-full max-w-xs text-center">
                            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://avatars.githubusercontent.com/u/46319683?v=4" alt="avatar" />

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Kayongo Johnson Brian </h3>
                                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">ML Engineer</span>
                            </div>
                        </div>

                        <div className="w-full max-w-xs text-center">
                            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://avatars.githubusercontent.com/u/78643384?v=4" alt="avatar" />

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">John Odai Obodai</h3>
                                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">ML Engineer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}