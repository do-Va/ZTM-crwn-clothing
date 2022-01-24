import React, { Suspense } from 'react';

import Spinner from '../spinner/spinner.component';
import ErrorBoundary from '../error-boundary/error-boundary.component';

const SuspenseComponent = Component => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
};

export default SuspenseComponent;
