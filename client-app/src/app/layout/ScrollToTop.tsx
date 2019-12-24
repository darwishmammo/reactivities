import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = ({ children, location: { pathnamne } }: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathnamne]);

  return children;
};

export default withRouter(ScrollToTop);
