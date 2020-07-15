import * as React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
	padding-left: 1rem;
	padding-right: 1rem;
	width: 1024px;
	margin: 0 auto; /* 중앙 정렬 */

	/* 브라우저 크기에 따라 가로 크기 변경 */
	@media (max-width: 1024px) {
		width: 768px;
	}
	@media (max-width: 768px) {
		width: 100%;
	}
`;

type ResponsiveProps = {
	children: React.ReactNode;
};

const Responsive = ({ children, ...rest }: ResponsiveProps) => {
	// style, className, onClick, onMouseMove 등 props 사용할 수 있도록
	// ..rest 사용 ResponsiveBlock에 전달
	return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
