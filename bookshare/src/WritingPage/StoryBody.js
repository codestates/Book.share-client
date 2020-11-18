import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import './StoryBody.css'


export default function StoryBody(props) {
  const { title, handleTitleChange, handleCancleClick, handleSubmitClick, handleStoryChange ,editorHtml} =props
  
  return (
    <>
    <section className="story-container">
      <div className="story-title">
        <input className="title-input" type="text" value={title} onChange={handleTitleChange} placeholder="제목을 입력하세요"/>
      </div>
      <span className="story-line-or-signup"></span>
      <div className="wrap-body">
      <ReactQuill theme="snow" value={editorHtml}
                  onChange={handleStoryChange} />
      </div>
     
      </section>
      <div className="content-aside">
        <div className="wrap-story-btn">
        <button className="story-btn-can" onClick={handleCancleClick}>취소</button>
        <button className="story-btn-sub" onClick={handleSubmitClick}>완료</button>
      </div>
      </div>
      </>
  )
 }
