import { ReactElement } from 'react';
import styled from 'styled-components';
import { ActivateDeactivate } from './components/ActivateDeactivate';
//import { Greeter } from './components/Greeter';
import { DutchAuction } from './components/DutchAuction';
import { SectionDivider } from './components/SectionDivider';
//import { SignMessage } from './components/SignMessage';
import { WalletStatus } from './components/WalletStatus';
//import 'antd/dist/antd.css'; 

const StyledAppDiv = styled.div`
  display: grid;
  grid-gap: 20px;
  padding: 20px 20px 0 20px;
`;

export function App(): ReactElement {
  return (
    <StyledAppDiv>
      <ActivateDeactivate />
      <SectionDivider />
      <WalletStatus />
      <SectionDivider />
      <DutchAuction />
    </StyledAppDiv>
  );
}
