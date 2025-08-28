import { useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const useForceUserInteraction = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const forceUserInteraction = useCallback((enabled: boolean) => {
    const currentPath = window.location.pathname;
    const newSearchParams = new URLSearchParams(searchParams);
    
    if (enabled) {
      newSearchParams.set('forced', 'true');
    } else {
      newSearchParams.delete('forced');
    }
    
    const queryString = newSearchParams.toString();
    const newUrl = queryString ? `${currentPath}?${queryString}` : currentPath;
    
    navigate(newUrl, { replace: true });
  }, [navigate, searchParams]);

  const isForced = searchParams.get('forced') === 'true';

  return {
    forceUserInteraction,
    isForced
  };
};