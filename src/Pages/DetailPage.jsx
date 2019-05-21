import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Remarkable from 'remarkable';
import steemit from '../Helpers/Steemit';

const mobildWidthStyles = `
  @media only screen and (max-width: 1024px) {
    min-width: 620px;
    width: unset;
    margin-right: 40px;
    margin-left: 40px;
  }
`;

const Container = styled.div`
  padding-top: 50px;
`;

const ArticleWrap = styled.div`
  min-width: 1020px;
  word-break: break-word;
  word-wrap: break-word;
  font-family: 'Noto Sans Light', 'Nanum Myeongjo', 'Malgun Gothic', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    min-width: 620px;
  }
`;

const ArticleCover = styled.div``;

const ArticleTitle = styled.h1`
  letter-spacing: -0.01em;
  color: #333;
  font-size: 34pt;
  font-size: 34pt;
  line-height: 40pt;
  word-wrap: break-word;
  width: 700px;

  ${mobildWidthStyles}
`;

const ArticleInfo = styled.div`
  margin-bottom: 27px;
  margin-top: 50px;
  width: 700px;
  font-size: 12px;

  ${mobildWidthStyles}

  & .by {
    color: #bbb;
    opacity: 0.8;
    margin-right: 2px;
    display: inline-block;
    width: 15px;
    height: 14px;
    margin: 0 4px 0 0;
    font-family: Georgia, sans-serif;
    font-style: italic;
    font-size: 12px;
  }
  & .author {
    color: #666;
  }
  & .dot {
    display: inline-block;
    width: 2px;
    height: 2px;
    margin: 4.5px 7px 0;
    background-color: #aaa;
    vertical-align: top;
  }
  & .date {
    letter-spacing: -0.05em;
    color: #bbb;
    opacity: 1;
  }
`;

const ArticleBody = styled.div`
  padding-bottom: 54px;
  position: relative;
  background-color: #fff;
  margin: 0 auto;
  font-smoothing: antialiased;
  backface-visibility: hidden;
  text-rendering: auto;
  text-rendering: optimizeSpeed;
  text-rendering: optimizeLegibility;
  text-rendering: geometricPrecision;
  text-rendering: inherit;
  width: 700px;

  ${mobildWidthStyles}

  & p {
    margin: 0 0 1.5rem 0;
    text-align: left;
    font-size: 11pt;
    line-height: 22pt;
    letter-spacing: 0.8px;
  }

  & img {
    max-width: 100%;
  }
`;

const md = new Remarkable({
  html: true, // Enable HTML tags in source
  xhtmlOut: false, // Use '/' to close single tags (<br />)
  breaks: true, // Convert '\n' in paragraphs into <br>
  langPrefix: 'language-', // CSS language prefix for fenced blocks
  linkify: true, // Autoconvert URL-like text to links

  // Enable some language-neutral replacement + quotes beautification
  typographer: false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed
  highlight: function(/*str, lang*/) {
    return '';
  },
});

const DetailPage = props => {
  console.log(props);
  const { history, location, match } = props;
  const { isExact, params, path, url } = match;
  const { author, permlink } = params;

  const [data, setData] = useState(null);

  useEffect(() => {
    steemit.database
      .getDiscussions('created', {
        tag: '',
        limit: 1,
        start_author: author,
        start_permlink: permlink,
      })
      .then(([data]) => setData(data));
    // .then(({ title, body, author }) => {});
    // dsteem.database.call()
  }, []);

  return (
    <>
      <Helmet>
        <title>Main | Whan Community</title>
      </Helmet>
      {data ? (
        <Container>
          <ArticleWrap>
            <ArticleCover>
              <ArticleTitle>{data.title}</ArticleTitle>
              <ArticleInfo>
                <span class="by">by</span>
                <span class="author">{data.author}</span>
                <span class="dot" />
                <span class="date">
                  {new Date(data.created + 'Z').toDateString()}
                </span>
              </ArticleInfo>
            </ArticleCover>
            <ArticleBody
              dangerouslySetInnerHTML={{ __html: md.render(data.body) }}
            />
          </ArticleWrap>
        </Container>
      ) : null}
    </>
  );
};

export default DetailPage;
