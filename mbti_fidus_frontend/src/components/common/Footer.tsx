import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.footer`
    position: absolute;
    bottom: 0px;
	width: 100%;
	background: white;
    box-shadow: 4px 0px 0px 2px rgba(0, 0, 0, 0.08);
    text-align: center;
`;

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
	return (
		<FooterBlock>
			<p className="title">MBTI_FIDUS</p>
			<p className="copyright">
				COPYRIGHT &copy; {new Date().getFullYear()} FIDUS ALL RIGHTS RESERVED
			</p>
		</FooterBlock>
	);
};

export default Footer;
