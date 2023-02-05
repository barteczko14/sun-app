import React, { useState } from 'react'
import './Form.css'
import Buttons from './Buttons'

const Form = props => {
	const [isValid, setIsValid] = useState(false)
	const [lostEnergy, setLostParams] = useState()
	const [producedEnergy, setProducedParams] = useState()
	const [date, setDate] = useState()
	const [totalEnergy, setTotalEnergy] = useState()
	const [enteredValue, setEnteredValue] = useState('')
	const [text, setText] = useState()

	const addDataHandler = () => {
		checkIsValid()
		countEnergy()
		if (isValid == true) {
			const id = Math.random().toString()
			props.addData(id, date, totalEnergy)
			setText('Pomyslnie dodano!')
		} else {
			setText('Nieprawidłowe dane!')
		}
	}

	const getLostEnergyHandler = event => {
		setLostParams(event.target.value)
		countEnergy()
	}
	const getProducedEnergyHandler = event => {
		setProducedParams(event.target.value)
		countEnergy()
	}
	const getDate = event => {
		setDate(event.target.value)
		countEnergy()
	}

	const countEnergy = () => {
		const energyAmount = (producedEnergy * 0.8 - lostEnergy).toFixed(2)
		setTotalEnergy(energyAmount)
	}

	const checkIsValid = () => {
		console.log(date)
		if (lostEnergy.trim().length > 0 && producedEnergy.trim().length > 0 && isNaN(date)) {
			setIsValid(true)
		} else {
			setIsValid(false)
		}
	}

	return (
		<div className='formbold-main-wrapper'>
			<div className='formbold-form-wrapper'>
				<form>
					<div className='formbold-mb-5'>
						<label htmlFor='lostenergy' className='formbold-form-label'>
							Energia zużyta (18)
						</label>
						<input
							type='text'
							id='lostenergy'
							placeholder='Energia zużyta'
							className='formbold-form-input'
							onChange={getLostEnergyHandler}
						/>
					</div>
					<div className='formbold-mb-5'>
						<label htmlFor='getenergy' className='formbold-form-label'>
							Energia wyprodukowana (28)
						</label>
						<input
							type='text'
							id='getenergy'
							placeholder='Energia wyprodukowana'
							className='formbold-form-input'
							onChange={getProducedEnergyHandler}
						/>
					</div>
					<div className='flex flex-wrap formbold--mx-3'>
						<div className='w-full formbold-px-3'>
							<div className='formbold-mb-5 w-full'>
								<label htmlFor='date' className='formbold-form-label'>
									{' '}
									Data{' '}
								</label>
								<input type='date' id='date' className='formbold-form-input' onChange={getDate} />
							</div>
						</div>
					</div>
					<div className='flex flex-wrap formbold--mx-3'>
						<div className='w-full formbold-px-3'>
							<div className='formbold-mb-5 w-full'>
								<p className={`${isValid ? 'green' : 'red'}`}>{text}</p>
							</div>
						</div>
					</div>
				</form>
				<Buttons addData={addDataHandler} />
			</div>
		</div>
	)
}
export default Form
