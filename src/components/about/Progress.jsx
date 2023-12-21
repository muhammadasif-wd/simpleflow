import React, { Suspense } from 'react';
import Loading from '../../shared/Loading';
import { Progress } from "@nextui-org/react";


export default function ProgressBar() {
    return (
        <main>
            <Suspense fallback={<Loading />}>
                <div className='flex justify-around mt-11'>
                    <div className='w-1/2 flex justify-center '>
                        <img className='w-4/5' src="https://demo.themefisher.com/agen-bootstrap/images/about/about-us.png" alt="" />
                    </div>
                    <div className='w-1/2 space-y-4'>
                        <Progress
                            label="HTML5 EXPERTISE"
                            size="sm"
                            value={8000}
                            maxValue={10000}
                            color='warning'
                            formatOptions={{
                                style: "currency",
                                currency: "ARS"
                            }}
                            showValueLabel={false}
                        />
                        <Progress
                            label="JQUERY EXPERTISE"
                            size="sm"
                            value={6500}
                            maxValue={10000}
                            color="warning"
                            formatOptions={{
                                style: "currency",
                                currency: "ARS"
                            }}
                            showValueLabel={false}
                            className="max-w-md"
                        />
                        <Progress
                            label="PHP EXPERTISE"
                            size="sm"
                            value={6900}
                            maxValue={10000}
                            color="warning"
                            formatOptions={{
                                style: "currency",
                                currency: "ARS"
                            }}
                            showValueLabel={false}
                            className="max-w-md"
                        />
                        <Progress
                            label="USER INTERFACE EXPERTISE"
                            size="sm"
                            value={8900}
                            maxValue={10000}
                            color="warning"
                            formatOptions={{
                                style: "currency",
                                currency: "ARS"
                            }}
                            showValueLabel={false}
                            className="max-w-md"
                        />
                    </div>
                </div>
            </Suspense>
        </main>
    )
}


