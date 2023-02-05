import React, { useState } from 'react';
import LineChart from "./LineChart";
import Form from "./Form";
// import { Data } from "./Data";


const App = () => {

	const [data, setData] = useState([
		{ id: '1', date: '10-03-2023', value: '4300' },
		{ id: '1', date: '10-03-2023', value: '44300' },
		{ id: '1', date: '10-03-2023', value: '300' },

	]);

	const addData = (id, date, value) => {
		setData(prevData => {
			const updatedData = [...prevData];
			updatedData.push({ id: id, date: date, value: value });
			console.log(updatedData)
			return updatedData;

		});
	};

	return (
		<div >
			<LineChart data={data} />
			<Form addData={addData} />
		</div>
	);
}

export default App;
