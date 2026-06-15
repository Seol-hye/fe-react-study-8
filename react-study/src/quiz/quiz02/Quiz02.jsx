import { useState, useTransition } from "react";
import '../quiz02/Quiz02.css';

function Quiz02() {

    const textArr = ['하나', '둘', '셋'];

    const [index, setIndex] = useState(0);

    const btn_click = ()=>{
        setIndex((index + 1) % textArr.length);

        //index = (index+1) > 2 ? 0 : (index+1);
        
        //index++;
        //if(index > 2){
        // index = 0;}
    }

    return (
        <div className="container_q2">
            <p>{textArr[index]}</p>
            <button style={ {borderRadius: 0}} 
            onClick={ btn_click }>변경버튼</button>

        </div>
    )
}

export default Quiz02;

// let [text, setText] = useState("하나");

// return(
//     <div style={{textAlign:'center'}}>
//         <p>{text}</p>
//         <button onClick={()=>{
//             if(text == '하나')
//                 setText('둘');
//             else if(text == '둘')
//                 setText('셋');
//             else
//                 setText('하나')
//         }}>변경버튼</button>
//     </div>
// )