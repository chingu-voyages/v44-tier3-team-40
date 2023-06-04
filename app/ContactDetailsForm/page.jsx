"use client";
import React from 'react'
import Button from '../components/Button'
import ProgressStepper from '../components/ProgressStepper'

import TextFormInput, {
	RadioFormInput,
	NumberFormInput,
	TextAreaFormInput,
} from '../components/FormInputs'

const ContactDetailsForm = () => {
    return (
        <div>
            <h2 className="ml-[0.4em] mt-[1em]">Western Rehab PT</h2>
            <div className="w-[310px] h-[20px] ml-[1em] mb-[40px] mt-[10px]">
            <ProgressStepper 
            currentStep={3}
            length={5}
            label='Tell us about yourself'
            />
            </div>
            <TextFormInput
				htmlFor="fname"
				label="Name"
				type="text"
				placeholder="your name here"
			/>
            <TextFormInput
				htmlFor="phone"
				label="Phone"
				type="phone"
				placeholder="your phone here"
			/>
            <TextFormInput
				htmlFor="email"
				label="Email Address"
				type="email"
				placeholder="your email here"
			/>
            <TextAreaFormInput
				label="Reason for visit"
				placeholder="reason for visit"
			/>
            <Button 
                text="Confirm"
                bgColor="#554ad8"
                textColor="white"
                hoverColor="#A4A4FF"
                hoverText="white"
                className=" ml-[1em] mt-[1em] text-[16px]"
				onClick={""}
            />
        </div>
    )
}

export default ContactDetailsForm;