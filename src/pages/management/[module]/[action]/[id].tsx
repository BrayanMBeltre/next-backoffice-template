import { useRouter } from 'next/router';
import React from 'react';

const Management = () => {
  const router = useRouter();
  const { id, action } = router.query;

  return (
    <div>
      Page {action} of the ID: {id}
    </div>
  );
};

export default Management;
