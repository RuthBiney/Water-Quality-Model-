'use client'
import { useState } from 'react'
import Navbar1 from '@/components/navbar1'


export default function Predict() {
    const [formData, setFormData] = useState({
        ph: 0,
        hardness: 0,
        solids: 0,
        chloramines: 0,
        sulfate: 0,
        conductivity: 0,
        organic_carbon: 0,
        trihalomethanes: 0,
        turbidity: 0
    })
    const [showPopup, setShowPopup] = useState(false);
    const [predictionResult, setPredictionResult] = useState('');
    const [isPotable, setIsPotable] = useState("");


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Perform prediction logic here
        console.log(formData)

        setShowPopup(true);

        setPredictionResult(isPotable ? 'The water is potable.' : 'The water is not potable.');

        // Close the popup
    }


    const PredictionPopup = ({ isOpen, onClose }) => (
        <div
            className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'
                }`}
        >
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl text-black font-semibold">Prediction Result</h3>
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-black  hover:text-gray-900 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <p className="text-gray-700">
                        {/* Display prediction result here */}
                        Based on the provided water quality parameters, the model
                        predicts that the water is potable.
                    </p>
                </div>
            </div>
        </div>
    );


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

            <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 mb-1 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1406&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="glasses photo" />
                </div>
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
                {/* 
                <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1406&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="glasses photo" />
                </div> */}
            </div>

            <div className="container flex mt-1 flex-col px-6 py-10 mx-auto space-y-6  lg:py-16 lg:flex-row lg:items-center">
                <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <div>
                        <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Water Quality Prediction</h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            This tool utilizes a machine learning model trained on historical water quality data to predict the potability of water samples. By entering the relevant water quality parameters, such as pH, hardness, solids, chloramines, sulfate, conductivity, organic carbon, trihalomethanes, and turbidity, the model can assess whether the water is safe for human consumption.
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            The prediction process involves analyzing the provided water quality attributes and comparing them against patterns learned from the training data. The model then outputs a probability score indicating the likelihood of the water being potable or non-potable.
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            Please note that while this tool provides a reliable estimate, it is recommended to consult with water quality experts for comprehensive analysis and confirmation. Additionally, regular testing and monitoring of water sources are crucial to ensure ongoing safety and compliance with relevant standards.
                        </p>
                    </div>
                </div>


                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <form onSubmit={handleSubmit} className="mt-8">
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="ph" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">pH</label>
                                    <input type="number" id="ph" name="ph" value={formData.ph} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter pH value" required />
                                </div>
                                <div>
                                    <label htmlFor="hardness" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hardness</label>
                                    <input type="number" id="hardness" name="hardness" value={formData.hardness} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter hardness value" required />
                                </div>
                                <div>
                                    <label htmlFor="solids" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Solids</label>
                                    <input type="number" id="solids" name="solids" value={formData.solids} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter solids value" required />
                                </div>
                                <div>
                                    <label htmlFor="chloramines" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chloramines</label>
                                    <input type="number" id="chloramines" name="chloramines" value={formData.chloramines} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter chloramines value" required />
                                </div>
                                <div>
                                    <label htmlFor="sulfate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sulfate</label>
                                    <input type="number" id="sulfate" name="sulfate" value={formData.sulfate} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter sulfate value" required />
                                </div>
                                <div>
                                    <label htmlFor="conductivity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Conductivity</label>
                                    <input type="number" id="conductivity" name="conductivity" value={formData.conductivity} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter conductivity value" required />
                                </div>
                                <div>
                                    <label htmlFor="organic_carbon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organic Carbon</label>
                                    <input type="number" id="organic_carbon" name="organic_carbon" value={formData.organic_carbon} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter organic carbon value" required />
                                </div>
                                <div>
                                    <label htmlFor="trihalomethanes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trihalomethanes</label>
                                    <input type="number" id="trihalomethanes" name="trihalomethanes" value={formData.trihalomethanes} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter trihalomethanes value" required />
                                </div>
                                <div>
                                    <label htmlFor="turbidity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Turbidity</label>
                                    <input type="number" id="turbidity" name="turbidity" value={formData.turbidity} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter turbidity value" required />
                                </div>
                            </div>
                            <button type="submit" className="text-black bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-white dark:hover:bg-gray-300 dark:focus:ring-gray-300">Predict</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* the popup */}
            <PredictionPopup
                isOpen={showPopup}
                onClose={() => setShowPopup(false)}
            />
        </main>
    )
}