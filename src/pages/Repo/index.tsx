import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { APIRepo, APIUser } from '../../@types';

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

interface RepoProps {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars?: number;
  forks?: number;
  location?: string;
}

interface Data {
  repos?: APIRepo;
  error?: string;
}

const Repo: React.FC = () => {
  const { username = '', reponame = '' } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/repos/${username}/${reponame}`),
    ]).then(async responses => {
      const [reposResponse] = responses;

      if (reposResponse.status === 404) {
        setData({ error: 'Busque por um Usuário/Org valido' })
        return;
      }
      // const user = await userResponse.json();
      const repos = await reposResponse.json();

      setData({
        repos,
      });
    });
  }, [reponame, username]);


  if (data?.error) {
    return <h1>{data.error}</h1>
  }

  if (!data?.repos) {
    return <h1>Loading...</h1>
  }

  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'username'} to={'/username'}>
          {username}
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={`/${reponame}/${username}`} >
          {reponame}
        </Link>
      </Breadcrumb>

      <p>{data.repos.description}</p>

      <Stats>
        <li>
          <StarIcon />
          <b>{data.repos.stars}</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>{data.repos.forks}</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={`https://github.com/${username}/${reponame}`}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;