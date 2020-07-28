import * as React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const HeaderBlock = styled.div`
	position: fixed;
	width: 100%;
	background: white;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: space-between; /* 자식 엘리먼트 사이 여백 최대 설정 */
	.logo {
		font-size: 1.125rem;
		font-weight: 800;
		letter-spacing: 2px;
	}
	.right {
		display: flex;
		align-items: center;
	}
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래 나타나도록 해 주는 컴포넌트
 */

const Spacer = styled.div`
	height: 4rem;
`;

const Gnb = styled.div`
	display: flex;
	line-height: 4rem;

	div + div {
		margin-left: 3rem;
	}
`;

const Header = () => {
	return (
		<>
			<HeaderBlock>
				<Wrapper>
					<div className='logo'>MBTI_FIDUS</div>
					<Gnb>
						<div>Personality Types</div>
						<div>Article & Surveys </div>
						<div>Community</div>
					</Gnb>
					<div className='right'>로그인</div>
				</Wrapper>
			</HeaderBlock>
			<Spacer />
		</>
	);
};

export default Header;
