import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

/**
 * @notice 브라우저 전체의 viewport를 가져오는 custom hook - setter는 없고, 드래그가 실행되었을 때 자동으로 width / height 변화를 감지하여 재설정해줌
 * @usage const { width, height} = useWindowsDimentsions();
 */
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}