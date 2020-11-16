import React, {useState} from 'react';
import Nav from './WritingNav';
import StoryBody from './StoryBody';
import axios from 'axios'

export default function WritingPage({history}) {

	const [data, setData] = useState("");
  const [title, setTitle] = useState("");
  
	const handleStoryChange = (event, editor ) => {
		
		const data = editor.getData();
		setData(data)
		console.log(data);
  }

  const handleTitleChange = (e) => {
    e.preventDefault()
    setTitle(e.target.value);
    console.log(title)
  }

  const handleCancleClick = e => {
    e.preventDefault();
    history.goBack('/main')
  }
  const handleSubmitClick = e => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/post/push', {
        title: title,
        aricle: data
      })
      .then(() => {
        history.push("/main:id")
      })
      .catch(err => console.log(err))
	}
	
	return (
	<>
			<Nav />
			<StoryBody
				handleStoryChange={handleStoryChange}
				handleTitleChange={handleTitleChange}
				handleCancleClick={handleCancleClick}
				handleSubmitClick={handleSubmitClick}
				data={data}
				title={title} />
	</>
	)
};