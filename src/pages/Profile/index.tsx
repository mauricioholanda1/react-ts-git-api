import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  RepoIcon,
  Tab
} from './styles';

import { APIRepo, APIUser } from '../../@types';

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const Profile: React.FC = () => {
  const { username = '' } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async responses => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: 'Busque por um Usuario/Org valido' })
        return;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();

      setData({
        user,
        repos,
      });
    });
  }, [username]);


  if (data?.error) {
    return <h1>{data.error}</h1>
  }

  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>
  }

  const TabContent = () => (
    <div className="content">
      <RepoIcon />

      <span className="label">Repositorios</span>
      <span className="number">{data.user?.public_repos}</span>
    </div>
  )
  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>
      <Main>
        <LeftSide>
          profile
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>
          <Repos>
            <h2>Random repos</h2>


          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;