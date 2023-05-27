"use client";
import React from 'react'
import Button from '../Button'
import ProgressStepper from '../components/ProgressStepper'

import TextFormInput, {
	RadioFormInput,
	NumberFormInput,
	TextAreaFormInput,
} from '../FormComponents/FormInputs'

const ScheduleForm = () => {
    return (
        <div>
            <h2>Western Rehab PT</h2>
            <ProgressStepper 
            currentStep={3}
            length={5}
            label='Tell us about yourself'
            />
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
            />
        </div>
    )
}

export default ScheduleForm;