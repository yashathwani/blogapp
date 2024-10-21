import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './BlogPostForm.css';

const BlogPostForm = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverPhoto(file);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      summary,
      content,
      coverPhoto
    };
    console.log(formData);
  };

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
                {previewUrl ? (
                  <div className="image-preview">
                    <img src={previewUrl} alt="Preview" />
                    <button 
                      type="button" 
                      className="button button-outline"
                      onClick={() => document.querySelector('input[type="file"]').click()}
                    >
                      Change Image
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="upload-icon">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                    </div>
                    <p className="upload-text">Upload a file or drag and drop</p>
                    <p className="upload-subtext">PNG, JPG, GIF up to 10MB</p>
                    <button
                      type="button"
                      className="button button-outline"
                      onClick={() => document.querySelector('input[type="file"]').click()}
                    >
                      Select File
                    </button>
                  </>
                )}
                <input
                  type="file"
                  className="hidden-input"
                  onChange={handleFileChange}
                  accept="image/png,image/jpeg,image/gif"
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