import * as React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { FiMenu } from 'react-icons/fi';

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
		@media (max-width: 768px) {
			display: none;
		}
	}

	.right-menu {
		display: none;
		@media (max-width: 768px) {
			display: block;
		}
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

	/* 브라우저 크기에 따라 렌더 유무 변경 */
	@media (max-width: 768px) {
		display: none;
	}
`;

const DropdownMenu = styled.div`
	display: flex;
	flex-direction: column;
`;

const CollapsedMenu = styled.div``;

const Header = () => {
	const navigations = (
		<>
			<Gnb>
				{Header.MeuList.map((menu: MenuListType) => (
					<div>{menu.title}</div>
				))}
			</Gnb>
			<div className="right">로그인</div>
		</>
	);

	return (
		<>
			<HeaderBlock>
				<Wrapper>
					<div className="logo">MBTI_FIDUS</div>
					{navigations}
					<div className="right-menu">
						<FiMenu fontSize="2rem" />
					</div>
				</Wrapper>
				<CollapsedMenu>{navigations}</CollapsedMenu>
			</HeaderBlock>
			<Spacer />
		</>
	);
};

export default Header;

type MenuListType = {
	key: string;
	title: string;
	link: string;
};

Header.MeuList = [
	{
		key: 'personalityTypes',
		title: 'Personality Types',
		link: '',
	},
	{
		key: 'articleAndSurveys',
		title: 'Article & Surveys',
		link: '',
	},
	{
		key: 'community',
		title: 'Community',
		link: '',
	},
];
