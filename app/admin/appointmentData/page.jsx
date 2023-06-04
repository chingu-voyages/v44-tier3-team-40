import Button from '../../components/Button'
import LinkButton from '../../components/LinkButton'

const AppointmentData = () => {
    return (
        <div className='ml-[1em]'>
            <header className='w-[310px] flex justify-between'>
                <div className='w-[20%]'>
                    <LinkButton text='logout' />
                </div>
                <div className='w-[20%]'>
                    <LinkButton text='options' />
                </div>
                </header>
            <h2 className='mt-[1em] font-black'>Feb 20 @ 9:30</h2>
            <ul>
                <li className="list-disc py-4 border-b-2 border-black w-[310px] font-black text-[18px]">Provider: <span className='font-normal'>Dr. Lemon</span></li>
                <li className="list-disc py-4 border-b-2 border-black w-[310px] font-black text-[18px]">Service: <span className='font-normal'>Dr. Lemon</span></li>
            </ul>
            <div className='mt-[2em]'>
            <h2 className="font-black">Patient's Details</h2>
            <ul>
                <li className="list-disc py-4 border-b-2 border-black w-[310px] font-black text-[18px]">Name: <span className='font-normal'>Adrian Beans</span></li>
                <li className="list-disc py-4 border-b-2 border-black w-[310px] font-black text-[18px]">Email: <span className='font-normal'>ab@gmail.com</span></li>
                <li className="list-disc py-4 border-b-2 border-black w-[310px] font-black text-[18px]">Phone: <span className='font-normal'>323-231-2312</span></li>
                <li className='list-disc py-4 w-[280px] font-black text-[18px]'>Reason for Visit: <br /><span className='font-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere distinctio architecto ipsam consequuntur quibusdam quae itaque fugit vitae asperiores modi.</span></li>
            </ul>
            </div>
            <div className="flex">
                <Button 
					text="edit"
					bgColor="#554ad8"
					textColor="white"
					hoverColor="#A4A4FF"
					hoverText="white"
					className="mt-[1em] text-[16px]"
					onClick={""}
				/>
                <Button 
					text="delete"
					bgColor="white"
					textColor="black"
					hoverColor="black"
					hoverText="white"
					className=" ml-[1em] mt-[1em] text-[16px] border border-black"
					onClick={""}
				/>
            </div>
        </div>
    )
}

export default AppointmentData;