import { useState } from 'react';
import './Quiz06.css'
import ColorBox from './ColorBox';

function Quiz06() {

    const [boxes, setBoxes] = useState(['red', 'blue', 'green', 'black']);

    const deleteBox = (index)=> {
        let temp = [...boxes];
        temp.splice(index, 1);
        setBoxes(temp);
    }


    return (
        <div>
            <div>
                <button onClick={() => {
                    setBoxes(['red', ...boxes]);
                }}>앞빨간박스추가</button>

                <button onClick={() => {
                    setBoxes(['blue', ...boxes]);
                }}>앞파란박스추가</button>

                <button onClick={() => {
                    setBoxes(['green', ...boxes]);
                }}>앞초록박스추가</button>

                <button onClick={() => {
                    setBoxes([...boxes, 'red']);
                }}>뒤빨간박스추가</button>

                <button onClick={() => {
                    setBoxes([...boxes, 'blue']);
                }}>뒤파란박스추가</button>

                <button onClick={() => {
                    setBoxes([...boxes, 'green']);
                }}>뒤초록박스추가</button>

                <button onClick={() => {
                    // setBoxes(boxes.slice(1));
                    let temp = [...boxes];
                    temp.shift();
                    setBoxes(temp);
                }}>앞 박스 삭제</button>

                <button onClick={() => {
                    // setBoxes(boxes.slice(0, -1));
                    let temp = [...boxes];
                    temp.pop();
                    setBoxes(temp);
                }}>뒤 박스 삭제</button>
            </div>
            <br />


            {boxes.map((item, index) => {
                // <div className='box' key={index} style={{ background: item }}></div>
                return <ColorBox
                    bgColor={item}
                    key={index}
                    index={index}
                    deleteBox={deleteBox}
                />
            })
            }


        </div >

    )

}

export default Quiz06;