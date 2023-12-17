import React from 'react';
import HeadingText from '../../shared/HeadingText';
import UnderLine from '../../shared/UnderLine';

const News = () => {
    return (
        <main>
            <HeadingText
                styles={'md:w-1/2 mx-auto my-10'}
                heading={'Latest News'}
            ></HeadingText>
            <div className="flex justify-center my-10">
                <UnderLine style={'w-48 h-2'} />
            </div>
            {/* Latest card */}
            <div className="flex justify-center gap-4">
                <div className="w-80 bg-white">
                    <a href="#">
                        <img
                            src="https://demo.themefisher.com/agen-bootstrap/images/blog/post-1.jpg"
                            alt=""
                        />
                    </a>
                    <p>January 15, 2018</p>
                    <div className="py-2">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so
                            far, in reverse chronological order.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                        </a>
                    </div>
                </div>
                <div className="w-80 bg-white">
                    <a href="#">
                        <img
                            src="https://demo.themefisher.com/agen-bootstrap/images/blog/post-1.jpg"
                            alt=""
                        />
                    </a>
                    <p>January 15, 2018</p>
                    <div className="py-2">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so
                            far, in reverse chronological order.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                        </a>
                    </div>
                </div>
                <div className="w-80 bg-white">
                    <a href="#">
                        <img
                            src="https://demo.themefisher.com/agen-bootstrap/images/blog/post-1.jpg"
                            alt=""
                        />
                    </a>
                    <p>January 15, 2018</p>
                    <div className="py-2">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so
                            far, in reverse chronological order.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default News;