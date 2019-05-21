import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
// import 'typeface-noto-serif';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Noto+Serif+KR:400,700');
	
	${reset}

	// dl, ul, ol, menu, li {
  //   	list-style: none;
	// }
`;