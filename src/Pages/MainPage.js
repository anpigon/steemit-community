// ref: https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/page-layout-examples/blog
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { useApolloClient, useQuery } from 'react-apollo-hooks';

import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import styles from '../Styles/DefaultStyles';

import sections from '../Constants/Sections';
import GET_POSTS from '../GraphQL/GetPosts';
import PostListItem from '../Components/PostListItem';

import Loader from '../Components/Loader';

const WrapWriterList = styled.div`
  float: right;
  width: 220px;
  padding: 20px 20px 24px;
  background-color: #fff;
  box-sizing: border-box;
`;

const PostList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  backface-visibility: hidden;
`;

const MainPage = props => {
  const client = useApolloClient();

  const mediaXSmatches = useMediaQuery('(min-width:960px)');

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  // const { data } = useQuery(GET_POSTS, {
  //   variables: {
  //     tags: ['kr'],
  //     limit: 10,
  //     skip: 0,
  //     order: 'CREATED',
  //     startDate: 10190512235959,
  //     endDate: 30190512235959,
  //   },
  // });
  // console.log(data);
  // setPosts(data.getPosts);

  const getPosts = async ({ tags }) => {
    await setLoading(true);
    const { data } = await client.query({
      query: GET_POSTS,
      variables: {
        tags,
        limit: 20,
        skip: 0,
        order: 'CREATED',
      },
    });
    console.log(data);
    setLoading(false);
    setPosts(data.getPosts);
  };

  useEffect(() => {
    getPosts({ tags: ['kr'] });
  }, []);

  const { classes } = props;

  return (
    <>
      <Helmet>
        <title>Main | Whan Community</title>
      </Helmet>
      <CssBaseline />
      <div className={classes.layout}>
        <Toolbar className={classes.toolbarMain}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Whan Community
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Toolbar>
        <Toolbar variant="dense" className={classes.toolbarSecondary}>
          {Object.entries(sections).map(([section, tags]) => (
            <Typography color="inherit" noWrap key={section}>
              <Button size="small" onClick={() => getPosts({ tags })}>
                {section}
              </Button>
            </Typography>
          ))}
        </Toolbar>
        <Divider />
        <main>
          <Grid container spacing={0} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <PostList>
                {posts.map(post => (
                  <PostListItem key={post.post_id} data={post} />
                ))}
                {/* <PostListItem data={
{"post_id":74639213,"author":"miri.choi","permlink":"r1rpd","title":"[커리지] 바쁜 운동인을 위한 단백질 간식 정기배송 스타트업","author_reputation":3639794194362,"summary":"운동인의 월간 단백질 박스 🏋 📦 바쁜 일상, 시간 쪼개어 운동하는 당신에게 매월 엄선된 다양한 단백질 간식을 배송합니다 🚛 치솟는 고깃값, 비싼 프로틴바 허나 부족한 단백질 섭","tags":["kr","kr-life","kr-event","kr-market","jjangjjangman"],"image":"https://cdn.steemitimages.com/DQmXbeGDKZvi1PCKhJqWyUbCrynGZTuC9NqjXdKdCZroJcU/IMG_5470.JPG","created":20190512142030,"total_payout_value":0,"curator_payout_value":0,"pending_payout_value":0.217,"vote_count":14,"comment_count":1,"__typename":"Post"}
} /> */}
              </PostList>
              {loading && <Loader />}
            </Grid>
            {/* End main content */}
            {mediaXSmatches && (
              <Grid item md={4}>
                <WrapWriterList>
                  <strong>추천작가</strong>
                </WrapWriterList>
              </Grid>
            )}
          </Grid>
        </main>
      </div>
    </>
  );
};

export default withStyles(styles)(MainPage);
