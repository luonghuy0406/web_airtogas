import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import Header from './header';
import Footer from './footer';

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  maxWidth: '100%'
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
});

export default function MainLayout({data}) {
    return (
      <>
      <Header company_data={data.company_data}/>
      <LayoutRoot>
          <LayoutContainer>
            <Outlet />
          </LayoutContainer>
        </LayoutRoot>
        <Footer company_data={data.company_data}/>
      </>
    );
  }