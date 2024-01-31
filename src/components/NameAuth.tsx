import React, { useState } from 'react'
import { auth } from '../types/authType'
import { useForm, SubmitHandler } from "react-hook-form"
import Email from './Email'
import Name from './Name'
import { useAppContext } from '../Context/AppContext'
import { render } from 'react-dom'
import Password from './Password'
type Inputs = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

function NameAuth() {
    let { step, setStep } = useAppContext()

    // const handleNext = () => {
    //     console.log(step)
    //     setStep(step += 1)
    // }
    // const handlePrev = (): void => {
    //     step > 0 ? setStep(step -= 1) : "";
    // }
    // const handlePrevDisabled = (): boolean => {
    //     console.log(step)
    //     return step === 1;
    // }
    // const handleNextDisabled = (): boolean => {

    //     return step === 3;
    // }

    console.log(step)
    // let step: number = 1;

    function renderSwitch() {
        switch (step) {
            case 1:
                return <Name />;

            case 2:
                return <Email />;
            case 3:
                return <Password />;

        }
    }



    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<auth> = (data) => console.log(data)

    console.log(watch("firstName")) // watch input value by passing the name of it
    console.log(watch("lastName")) // watch input value by passing the name of it
    return (
        <>
            <div className="container">

                <div className="form-container">

                    <div className="left">
                        {/* step == 2 ? "current" :"" */}
                        <div className={`step step1 ${step == 1 ? "current" : ""}`}>
                            <div className="number-container ">1</div>
                            <div className="name-container">
                                <p>Step 1</p>
                                <p>Your Name</p>
                            </div>
                        </div>
                        <div className={`step step2 ${step == 2 ? "current" : ""}`}>
                            <p className="number-container">2</p>
                            <div className="name-container">
                                <p>Step 2</p>
                                <p>Your Email</p>
                            </div>
                        </div>
                        <div className={`step step3 ${step == 3 ? "current" : ""}`}>
                            <p className="number-container">3</p>
                            <div className="name-container">
                                <p>Step 3</p>
                                <p>Your Password</p>
                            </div>
                        </div>

                    </div>
                    <div className="right">
                        <div className="loginform">


                            {/* <Name /> */}
                            {renderSwitch()}


                            {/* {handleNextDisabled() ? "" : (<input className='input_btn' type="submit" value="Continue" onClick={handleNext} />)}


                            

                                {step === 3 ? (<input className='input_btn' type="submit" value="Submit" />) : ""} */}

                        </div>
                    </div>

                    {/* <p className="heading-container">Lets start with your name first</p> */}

                </div>

            </div>

        </>
    )
}

export default NameAuth