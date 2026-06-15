import '../quiz03/Quiz03.css';
import TextItem from './TextItem';

function Quiz03() {

    const list = [
        { title: "하나", content: "내용하나" },
        { title: "둘", content: "내용둘" },
        { title: "셋", content: "내용셋" },
        { title: "넷", content: "내용넷" },
        { title: "다섯", content: "내용다섯" }
    ];

    return (
        <div className='App'>
            {
                list.map((item, index) => (
                    <TextItem
                        key={index}
                        title={item.title}
                        content={item.content}
                    />
                ))
            }
        </div>
    );

}

export default Quiz03;