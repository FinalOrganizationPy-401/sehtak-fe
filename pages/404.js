import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
<div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div class="xl:pt-24 w-full xl:w-1/2 relative pb-0">
                <h1 class="my-2 text-gray-800 font-bold text-2xl">
                    This Page Not Found 404
                </h1>
                <p class="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                <Link href="/"><button class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</button></Link>
            </div>
            <div>
                <img src="https://img.freepik.com/premium-vector/oops-404-page-found-error-sockets-are-disconnected-vector-cartoon-illustration_575709-346.jpg?w=2000" />
            </div>
        </div>
    );
}

export default NotFound;
