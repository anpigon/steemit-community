import { gql } from "apollo-boost";

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
      post_id
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
			# category
		}
}`;

export default GET_POSTS;