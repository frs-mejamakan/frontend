import { signIn } from 'next-auth/react';
import Button from '../Shared/Button/Button';
import { Section } from '../Shared/Layout/Layout';
import { ProvidersContainer } from './Auth.styles';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const Auth = ({ providers }) => {
  return (
    <Section>
      <span>
        <h1>Login or create account</h1>
        <p>Let's get you and your family some delicious lauk</p>
      </span>
      <ProvidersContainer>
        {Object.values(providers).map((provider) => {
          let color;
          let icon;
          if (provider.name === 'Google') {
            color = 'googleColor';
            icon = <GoogleIcon />;
          }
          if (provider.name === 'Facebook') {
            color = 'facebookColor';
            icon = <FacebookIcon />;
          }

          return (
            <Button
              width='100%'
              key={provider.name}
              onClick={() => signIn(provider.id)}
              color={color}
              icon={icon}
              space
            >
              Continue with {provider.name}
            </Button>
          );
        })}
      </ProvidersContainer>
    </Section>
  );
};

export default Auth;
