import React from 'react'; //브라우저가 읽을 수 있게 도와줌
import './FontPicker.css'; // CSS스타일링을 위해 가져옴

                            
//                              {/*label을 통해 htmlFor을 이용해 체크박스와  연결되게 만듦*/}
//                              {/*htmlFor에서 font-${index}의 역할은 템플릿리터럴을 사용해서 글씨체마다 ID를 부여하기 위해서 씀 */}
//                              {/*f를 통해(JSX문법을 통해 값을 삽입하기 위한 과정임) label의 각각텍스트가 글씨체로 표기됨 */}


// //글씨마다 눈누라는 폰트api? 주소를 삽입해서 다운로드 받을 수 있게 할 생각임


const FontPicker = ({ font, onFontChange }) => {
    const fonts = [
        { name: '기본 글씨체', family: 'sans-serif' },
        { name: '나눔명조', family: 'Nanum Myeongjo' },
        { name: '힘내라는 양보단', family: 'Gamja Flower' },
        { name: '따악따단단', family: 'Nanum Pen Script' },
        { name: '잘하고 있어', family: 'Nanum Pen Script' }
    ];

    return (
        <div className="font-picker">
            <select value={font} onChange={(e) => onFontChange(e.target.value)}>
                {fonts.map((f, index) => (
                    <option key={index} value={f.family} style={{ fontFamily: f.family }}>
                        {f.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FontPicker;
