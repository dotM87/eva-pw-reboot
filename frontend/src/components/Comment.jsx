import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import { FaTimes, FaUserCircle } from 'react-icons/fa';

const Comment = ({ comment, onDelete, onDrag, onUpdateText }) => {
  const [text, setText] = useState(comment.text || '');
  const textareaRef = useRef(null);

  useEffect(() => {
    setText(comment.text);
  }, [comment.text]);

  const handleDelete = () => {
    onDelete(comment.id);
  };

  const handleDrag = (e, data) => {
    const rect = data.node.getBoundingClientRect();
    const x = data.x + rect.width / 2;
    const y = data.y + rect.height / 2;
    onDrag(comment.id, x, y);
  };

  const handleChange = (e) => {
    setText(e.target.value);
    onUpdateText(comment.id, e.target.value);
    resizeTextarea();
  };

  const resizeTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    resizeTextarea();
  }, [text]);

  return (
    <Draggable defaultPosition={{ x: comment.commentX - 72 / 2, y: comment.commentY - 50 / 2 }} onDrag={handleDrag}>
      <div className="absolute bg-[#A8A5FF] text-black p-4 rounded-lg shadow-lg cursor-move w-72">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <FaUserCircle className="text-2xl mr-2" />
            <span className="text-sm font-semibold">Username</span>
          </div>
          <button onClick={handleDelete} className="text-[#8986E8] hover:text-red-700">
            <FaTimes />
          </button>
        </div>
        <textarea
          ref={textareaRef}
          className="w-full p-2 bg-[#8986E8] text-black border-none rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#2C2C2C]"
          value={text}
          onChange={handleChange}
          placeholder="Comentario"
          style={{ minHeight: '50px', overflowY: 'auto', color: 'black' }}
        />
      </div>
    </Draggable>
  );
};

export default Comment;
