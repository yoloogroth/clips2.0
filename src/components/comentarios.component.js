import React, { useState } from "react";
import KafkaService from "../services/kafka.service";

const CommentBox = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [showForm, setShowForm] = useState(false);

    const handleNewComment = (event) => {
        setNewComment(event.target.value);
    };

    const handleAddComment = () => {
        if (newComment !== "") {
            const newCommentObj = {
                text: newComment
            };
            setComments([...comments, newCommentObj]);
            setNewComment("");
            setShowForm(false);
            saveComment(1 , comments);
            
        }
    };
    
    const saveComment = (status, comment) => {
    let data = {
      id: 0,
      status: status
    };
 
    console.log(JSON.stringify(data));
 
    KafkaService.comment("usuario","objeto", comment);
  }


    return (
        <div className="comment-box">
            <div className="comments">
                {comments.map((comment, index) => (
                    <div className="comment" key={index}>
                        <p className="comment-text">{comment.text}</p>
                    </div>
                ))}
            </div>
            {showForm ? (
                <div className="comment-form">
                    <textarea
                        value={newComment}
                        onChange={handleNewComment}
                        placeholder="Add a comment..."
                    />
                    <button onClick={handleAddComment}>Post</button>
                    <button onClick={() => setShowForm(false)}>Cancel</button>
                </div>
            ) : (
                <button class="btn btn-primary" onClick={() => setShowForm(true)}>Add a comment</button>
            )}
        </div>
    );
};

export default CommentBox;
