import { useRouter } from 'next/router';
import React from 'react';

const CrudModule = () => {
  const router = useRouter();
  const { module } = router.query;

  console.log(module);

  return <div>List of {module}</div>;
};

export default CrudModule;
