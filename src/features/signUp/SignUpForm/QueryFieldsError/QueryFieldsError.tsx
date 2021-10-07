import React from 'react';
import { Box } from '@material-ui/core';
import { Errors, QueryFieldsErrorProps } from './types';

const IMPOSSIBLE_TO_CREATE_NEW_USER_WITH_SUCH_DATA_RESPONSE_STATUS_ERROR = 422;

export const QueryFieldsError: React.FC<QueryFieldsErrorProps> = ({
  requestError,
}) => {
  const status = requestError.responseData?.status;
  const errors: Errors = requestError.responseData?.data?.errors;
  return IMPOSSIBLE_TO_CREATE_NEW_USER_WITH_SUCH_DATA_RESPONSE_STATUS_ERROR ===
    status ? (
    <>
      <Box>
        {Object.entries(errors).map((error) => (
          <Box key={error[0]}>
            {error[0]}: {error[1].join(', ')}
          </Box>
        ))}
      </Box>
    </>
  ) : null;
};
