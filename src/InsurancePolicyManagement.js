import React from 'react';
import CommonPolicyFeatures from './sectors/common/components/CommonPolicyFeatures';
import SectorSpecificPolicy from './sectors/common/components/SectorSpecificPolicy';

const InsurancePolicyManagement = () => {
  return (
    <div>
      <h2>Insurance Policy Management</h2>
      <CommonPolicyFeatures />
      <SectorSpecificPolicy />
    </div>
  );
}

export default InsurancePolicyManagement;