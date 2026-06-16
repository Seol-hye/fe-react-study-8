import { useState } from 'react';
import './Quiz04.css';


function Quiz04() {

    const [boxes, setBoxes] = useState([1]);

    return (
        <div>
            <button style={{margin:'10px'}} onClick={() => {
                setBoxes([...boxes, boxes.length + 1])
                console.log("추가 버튼 클릭");
                
            }}>추가</button><br/><br/>
            <div>
                {boxes.map((box, index) => (
                    <div className='box' key={index}> 박스</div>
                ))}
            </div>

        </div >


    )

}

export default Quiz04;