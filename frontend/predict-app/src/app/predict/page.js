'use client'
import { useState } from 'react'
import Navbar1 from '@/components/navbar1'


export default function Predict() {
    return (

        <main className="bg">
            <div className="bg-white">
                <Navbar1 />
            </div>

            <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Introduction</h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            This tool is designed to help you determine the potability of water based on various quality parameters. By entering specific attributes of a water sample, you can assess whether the water is safe for human consumption.
                        </p>

                        <div className="grid gap-6 mt-8 sm:grid-cols-2">
                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span className="mx-3">pH Level</span>
                            </div>

                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span className="mx-3">Hardness</span>
                            </div>

                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span className="mx-3">Solids</span>
                            </div>

                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span className="mx-3">Chloramines</span>
                            </div>

                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span className="mx-3">Sulfate</span>
                            </div>

                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span className="mx-3">Conductivity</span>
                            </div>

                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span className="mx-3">Organic Carbon</span>
                            </div>

                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span className="mx-3">Trihalomethanes</span>
                            </div>

                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span className="mx-3">Turbidity</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="glasses photo" />
                </div>
            </div>

            <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                            Purpose
                        </h1>

                        <div className="mt-8 space-y-5">
                            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span className="mx-1">
                                    The primary objective of this tool is to evaluate the safety and suitability of water sources for human consumption. This is achieved through a machine learning model that predicts water potability based on the provided water quality attributes. This can help in making informed decisions about water treatment and ensuring compliance with water quality standards.

                                </span>
                            </p>

                            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span className="mx-1">
                                    This prediction tool is based on a machine learning model trained on historical water quality data. While it provides a good indication of water potability, it is recommended to consult with water quality professionals for detailed analysis and confirmation.


                                </span>
                            </p>



                        </div>
                    </div>


                </div>

                <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1406&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="glasses photo" />
                </div>
            </div>

            
        </main>
    )
}