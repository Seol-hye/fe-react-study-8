
//                  props
function ColorBox( {bgColor, index, deleteBox} ) {

    return (
        <div className='box' style={{ background: bgColor }}>
            <button onClick={()=>{
                deleteBox(index);
                console.log("X버튼 클릭");
            }}>X</button>
        </div>
        //                                        props.bgColor
    )

}

export default ColorBox;