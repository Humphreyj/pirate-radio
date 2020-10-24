import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { color,screen } from '../util';

const Feed = (props) => {
  const FeedWrap = styled.div`
  ::-webkit-scrollbar {
    width: 1px;
  }
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items:center;
    background-color: ${color.Blackish};
    color: ${color.whitish};
    text-align: center;
    overflow-y: scroll;
    padding-top: 20px;

    .news-post {
      background-color: black;
      margin: 10px 0;
      text-align: center;
      width: 80%;
      padding: 20px 0;

      .post-title {
        font-size: 1.2em;
      }
      .post-text {
        margin: 10px auto;
        width: 90%;
        line-height: 1.1em;
      }
      a { 
        margin: 20px 0;
        color: inherit;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    

    @media (max-width: ${screen.md}px) {
      margin: 20px auto;
      height: 30em;
    }
  `;
 console.log(props.posts)
  return (
    <FeedWrap>
        {props.posts.map(post => {
          return (
            <div className="news-post">
              <h4 className="post-title">{post.title}</h4>
              <p className="post-text">{post.text}</p>
              <Link to='/'>Read More</Link>
            </div>
          )
        })}
    </FeedWrap>
  );
}

const mapStateToProps = (state) => {
  return {
      posts: state.posts
  }
}

export default connect(mapStateToProps)(Feed);
