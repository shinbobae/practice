import React, { useCallback, useEffect, useState } from 'react';

const ResponseCheck = () => {
	const [box, setBox] = useState([
		{id: 1, color: "white"},
		{id: 2, color: "brown"}, 
		{id: 3, color: 'yellow'}, 
		{id: 4, color: "red"}
	])
	const [food, setFood] = useState({
		title: "음식",
		contents: [{
			id: 1,
			name: "밥",
		}, {
			id: 3,
			name: "라면"
		}]
	});
	
	useEffect(() => {
		// 1
		// const copy = food.contents.slice();	// 복사
		// copy.push({id:2,name:"빵"});		// 값 추가
		// copy.sort((a,b) => parseInt(a.id) - parseInt(b.id));	//정렬
		// setFood({ ...food, contents: copy });

		// 2
		let newBox = box.slice();
		let foodContent = food.contents.slice();
		newBox.map((box) => {
			foodContent.map((food) => {
				if (box.id === food.id) {
					box.name = food.name;
				}
			})
		});
		setBox(newBox);
	}, []);

	useEffect(() => {
		console.log('food', food);
		console.log('box', box)
	}, [food, box])

	return (
		<>
			<h1>HI</h1>
		</>
	)
}

export default ResponseCheck;