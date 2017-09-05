import React from 'react';
import IoAndroidDelete from 'react-icons/lib/io/android-delete';
import IoAndroidCreate from 'react-icons/lib/io/android-create';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import * as moment from 'moment';
import { Link } from 'react-router-dom';

const style = {
  voting: {
    position: 'absolute',
    top: '-20px',
    right: '-2px',
    textAlign: 'center',
    padding: '5px'
  }
};

export const PostSummary = ({ post }) => (
  <div className='card mb-2'>
    <div className='card-body'>
      <div style={{ position: 'relative' }}>
        <h5 className='card-title'>
          <Link to={`/${post.category}/${post.id}`}>
            {post.title} <span className='badge badge-primary'>{post.category}</span>
          </Link>
        </h5>
        <h6 className='card-subtitle mb-2 text-muted'>
          Submitted by <strong>{post.author}</strong> on <em>
            {moment(post.timestamp).format('MMMM Do YYYY, h:mm:ss a')}
          </em>
        </h6>
        <div style={style.voting}>
          <FaArrowUp />
          <br />
          {post.voteScore}
          <br />
          <FaArrowDown />
        </div>
      </div>
      <hr />
      <div className='mt-2 mb-4'>
        <p className='card-text'>
          {`${post.body.split(' ').slice(0, 20).join(' ')}...`}
        </p>
      </div>
      <h6 className='card-subtitle mb-2 text-muted'>
        {post.comments.length} comments
      </h6>
      <button type='button' className='btn btn-success mr-2' data-toggle='tooltip' data-placement='top' title='Edit this post'>
        <IoAndroidCreate size={25} />
      </button>
      <button type='button' className='btn btn-danger' data-toggle='tooltip' data-placement='top' title='Delete this post'>
        <IoAndroidDelete size={25} />
      </button>
    </div>
  </div>
);