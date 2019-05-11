// ref: https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/page-layout-examples/blog
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useApolloClient, useQuery } from "react-apollo-hooks";

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

const GET_POSTS = gql`
  query GetPosts(
		$tags: [String!]!
		$limit: Int
		$skip: Int
		$startDate: Float
		$endDate: Float
		$order: Order
	) {
		getPosts(
			tags: $tags
			limit: $limit
			skip: $skip
			order: $order
			startDate: $startDate
			endDate: $endDate
		) {
			author
			permlink
			title
			author_reputation
			summary
			tags
			image
			created
			total_payout_value
			curator_payout_value
			pending_payout_value
			vote_count
			comment_count
		}
}`;

const sections = {
	'코딩': ['kr-dev', 'dev'],
  'Technology': [],
  'Design': [],
  'Culture': [],
  'Business': [],
  'Politics': [],
  'Opinion': [],
  'Science': [],
  'Health': [],
  'Style': [],
  'Travel': [],
};

const MainPage = (props) => {
	
	// const { data } = useQuery(GET_POSTS, {
	// 	variables: {
	// 		tags,
	// 		limit: 10,
	// 		skip: 0,
	// 		order: 'CREATED',
	// 		startDate: 10190512235959,
	// 		endDate: 30190512235959,
	// 	},
	// })

	const client = useApolloClient();

	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);
	
	const _getPosts = async ({ tags }) => {
		await setLoading(true);
		const { data } = await client.query({
			query: GET_POSTS,
			variables: {
				tags,
				limit: 20,
				skip: 0,
				order: 'CREATED',
				startDate: 10190512235959,
				endDate: 30190512235959,
			}
		});
		console.log(data);
		setLoading(false);
		setPosts(data.getPosts)
	}

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
					{Object.entries(sections).map(([ section, tags ]) => (
						<Typography color="inherit" noWrap key={section}>
							<Button size="small" onClick={() => _getPosts({ tags })}>{section}</Button>
						</Typography>
					))}
				</Toolbar>
				<Divider />
				<main>
					<Grid container spacing={0} className={classes.mainGrid}>
						{/* Main content */}
						<Grid item xs={12}>
							{
								posts.map(post => (
									<div>
										{post.title}
									</div>
								))
							}
						</Grid>
						{/* End main content */}
					</Grid>
				</main>
			</div>
		</>
	);
};

export default withStyles(styles)(MainPage);