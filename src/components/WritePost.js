import React, {useState} from 'react';
import './WritePost.css';
import $ from 'jquery';
import backButtonImage from './icon.png';
import ColorPicker from './ColorPicker';
import FontPicker from './FontPicker';
import {Sheet} from 'react-modal-sheet';

const ColorChoose=({color, setColor})=> {
  const [isOpen, setOpen]=useState(false);

  return (
    <>
    <button onClick={()=>setOpen(true)}>Open Color Picker</button>
    <Sheet
    isOpen={isOpen}
    onClose={()=>setOpen(false)}
    detent="content-height">
      <Sheet.Container>
        <Sheet.Content>
          <Sheet.Scroller>
            <div style={{height: 100}}></div>
          </Sheet.Scroller>
          <ColorPicker color={color} onColorChange={setColor}/>
        </Sheet.Content>
      </Sheet.Container>
      </Sheet></>
  );
};

const WritePost=()=>{
  const [input, setInput] =useState('');
  const [toWritePost, setTowritePost]=useState([]);
  const [color, setColor] = useState('#ffffff');
  const [font, setFont]=useState('기본 글씨체');
  
  const onSubmit=()=> {
    const postData={
      id: toWritePost.length,
      input: input,
      color: color,
      font: font,
      checked:false
    };
    $.ajax({
      url: 'Hmmm',  //백엔드 코드
      type:'POST',
      data: JSON.stringify(postData),
      contentType: 'application/json',
      success: function(response) {
        console.log('Data saved: ', response);
        setTowritePost([...toWritePost, postData]);
        setInput('');
      },
      error: function(error) {
        console.error('Error saving data: ', error);
      }
    });
  };

  return (
    <div className="write-post-container">
        <div className="header">
            <button className="back-button" onClick={() => console.log('Back button clicked')}>
                <img src={backButtonImage} alt="Back Button" width="24" height="24" /> 
            </button>
            <h1>글쓰기</h1>
        </div>
        <div className="content" style={{ backgroundColor: color }}>
            <div className="emoji">😎</div>
            <h2>새싹</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='오늘 나의 감정과 마주하고 솔직한 마음을 표현해보세요'
                style={{fontFamily: font}}
            />
        </div>
        <button onClick={onSubmit}>작성완료</button>
<ColorChoose color={color} setColor={setColor} />
<FontPicker font={font} onFontChange={setFont}/>
      </div>
  );
};
export default WritePost;