import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function StoryBody(props) {
  const {data, title, handleStoryChange, handleTitleChange, handleCancleClick, handleSubmitClick} = props

  return (
    <section className="story-container">
      <div className="story-title">
        <input className="title-input" type="text" value={title} onChange={handleTitleChange} placeholder="제목을 입력하세요"/>
      </div>
      <CKEditor
        className="CKEditor"
        editor={ ClassicEditor }
        value={data}
        onChange={handleStoryChange}
      />
      <button onClick={handleCancleClick}>취소</button>
      <button onClick={handleSubmitClick}>완료</button>
    </section>
  )
 }
