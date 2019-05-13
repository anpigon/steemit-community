import React from 'react';
import styled from 'styled-components';
import { getReputation, transferTime } from '../Util/SteemUtil'

const PostWrapper = styled.li`
  min-height: 180px;
  padding: 30px 20px;
  border-bottom: 1px solid #eee;
  position: relative;
  background-color: #fff;
  box-sizing: border-box;
  font-family: 'Noto Serif KR', "Noto Sans Light", "Malgun Gothic", sans-serif, serif;
`

const PostLink = styled.a`
  display: block;
  clear: both;
  overflow: hidden;
`;

const PostContent = styled.div`
  float: left;
  width: 100%;
  &.has_image {
    width: 520px;
  }
`;

const PostTitle = styled.strong`
  font-weight: 400;
  font-size: 20px;
  letter-spacing: -1px;
  white-space: nowrap;
  line-height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PostSummery = styled.div`
  display: -webkit-box;
  max-height: 46px;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  padding-top: 6px;
  color: #666;
  font-size: 14px;
  line-height: 21px;
`;

const PostThumb = styled.div`
  overflow: hidden;
  position: absolute;
  top: 30px;
  right: 20px;
  width: 120px;
  float: right;
}
`;

const PostImg = styled.img`
  object-fit: cover;
  width: 120px;
  height: 120px;
  object-position: center;
  image-rendering: auto;
`;

const PostAppendWrapper = styled.div`
  display: block;
  overflow: hidden;
  padding-top: 20px;
  font-size: 12px;
  color: #959595;
`;

const Dot = styled.span`
  float: left;
  display: inline-block;
  width: 2px;
  height: 2px;
  margin: 4.5px 6px 0;
  background-color: #aaa;
  vertical-align: top;
`;

const PostAppend = styled.span`
  float: left;
  user-select: text !important;
  font-size: 12px;
  color: #959595;
`;

const By = styled.span`
  float: left;
  width: 15px;
  height: 15px;
  margin-right: 4px;
  font-size: 12px;
  font-family: Georgia;
  font-style: italic;
  color: #bfbfbf;
  }
`;

const PostListItem = ({ data }) => {
  // console.log(data)
  const payout = data.curator_payout_value + data.pending_payout_value + data.total_payout_value;
  const hasImage = Boolean(data.image);
  return (
    <PostWrapper>
      <PostLink>
        <PostContent className={hasImage && 'has_image'}>
          <PostTitle>{data.title}</PostTitle>
          <PostSummery>{data.summary}</PostSummery>
          <PostAppendWrapper>
            <PostAppend>좋아요{data.vote_count}</PostAppend>
            <Dot />
            <PostAppend>댓글{data.comment_count}</PostAppend>
            <Dot />
            <PostAppend>보상${payout}</PostAppend>
            <Dot />
            <PostAppend>{transferTime(data.created)}</PostAppend>
            <Dot />
            <By>by</By>
            <PostAppend>{data.author}({getReputation(data.author_reputation, 0)})</PostAppend>
          </PostAppendWrapper>
        </PostContent>
        {
          hasImage && (
            <PostThumb>
              <PostImg src={`https://cdn.steemitimages.com/640x0/${data.image}`} />
            </PostThumb>
          )
        }
        
      </PostLink>
    </PostWrapper>
  )
}

export default PostListItem;