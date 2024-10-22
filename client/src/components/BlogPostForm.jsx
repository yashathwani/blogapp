import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './BlogPostForm.css';
import { Navigate } from 'react-router-dom';

const BlogPostForm = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files,setFiles] = useState(null);
  // const [previewUrl, setPreviewUrl] = useState(null);
  const [Redirect,SetRedirect] = useState(false);
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['link', 'image', 'video'],
      ['clean'],
      [{ 'color': [] }, { 'background': [] }],
      ['code-block']
    ]
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'indent',
    'align',
    'link', 'image', 'video',
    'color', 'background',
    'code-block'
  ];

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setCoverPhoto(file);
  //     const fileReader = new FileReader();
  //     fileReader.onload = () => {
  //       setPreviewUrl(fileReader.result);
  //     };
  //     fileReader.readAsDataURL(file);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
      data.set('cover', files[0]);
    const response= await fetch('http://localhost:4000/post', {
      method: 'POST',
      credentials: 'include',
      body: data
    })
    if (response.ok)
    {
      SetRedirect(true);
    }
  };
  if (Redirect)
  {
    return <Navigate to="/" />
  }

  return (
    <div className="blog-post-container">
      <div className="blog-post-card">
        <h1 className="blog-post-title">Create New Blog Post</h1>
        
        <form onSubmit={handleSubmit} className="blog-post-form">
          <div className="form-group">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
              placeholder="Enter your blog post title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="summary" className="form-label">Summary</label>
            <textarea
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="form-textarea"
              placeholder="Brief description for your blog post"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Cover Photo</label>
            <div className="upload-container">
              <div className="upload-content">
                <input
                  type="file"
                  onChange={(e)=>setFiles(e.target.files)}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Content</label>
            <div className="editor-container">
              <ReactQuill
                value={content}
                onChange={setContent}
                modules={modules}
                formats={formats}
                className="quill-editor"
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="button button-outline">
              Cancel
            </button>
            <button type="submit" className="button button-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogPostForm;