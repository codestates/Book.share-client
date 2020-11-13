import React, { useState } from 'react';
import axios from 'axios'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function StoryBody({history}) {
  const [story, setStory] = useState("");
  const [title, setTitle] = useState("");
  
  const handleStoryChange = (e) => {
    e.preventDefault()
    setStory(e.target.value);
    console.log(story)
  }

  const handleTitleChange = (e) => {
    e.preventDefault()
    setTitle(e.target.value);
    console.log(title)
  }

  return (
    <form className="story-container" onSubmit={e => {
      e.preventDefault();
      axios
        .post('http://localhost:8080/post/push', {
          // id: id,
          // userId: email,
          aricle: story
        })
        .then(res => {
          history.push("/:id")
        })
        .catch(err => console.log(err))
    }}>
      <div className="story-title">
        <input className="title-input" type="text" value={title} onChange={handleTitleChange} placeholder="제목을 입력하세요"/>
      </div>
      <CKEditor
        className="CKEditor"
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
      <button>완료</button>
    </form>
  )
 }