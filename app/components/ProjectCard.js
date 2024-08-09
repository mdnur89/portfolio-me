import React, { Component } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { logoUrls } from '../data/imgUrls';

const CardContainer = styled.div`
  position: relative;
  flex: 1 0 40%;
  margin: 50px 8px 15px;
  min-width: 300px;
  max-width: 600px;
  transform: scale(1);
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.005);
    box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.4);    
  }
`
const OverlayLogo = styled.img`
  margin: 0 4px;
  position: relative;
  top: 5px;
  height: 24px;
  background: #FFF;
  border: 1px transparent;
  border-radius: 5px;
`
const ProjectCard = ({project}) => {
  function getLogos(frameworks) {
    return (
      frameworks.map(framework => {
        return <OverlayLogo key={framework} src={logoUrls[framework]} title={framework} alt={framework}/>
      })
    )
  }

  return (
    <CardContainer>
      <a href={project.siteUrl} target='_blank' css={{':hover':{textDecoration: 'none'}}}>
        <img
          src={project.imgUrl}
          height='100%'
          width='100%'
        />
        <div css={css`
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 3px;
            background: rgba(0, 0, 0, 0.4);
            color: #FFF;
            height: 80px;
        `}>
          <span>
            <div css={{fontSize: '24px'}}>
              {project.name}
            </div>
            <span>
              {getLogos(project.frameworks)}
            </span>
          </span>
        </div>
      </a>
      <div css={{position:'absolute', bottom:'5px', right:'20px', zIndex:'1000'}}>
        <a href={project.gitUrl} target='_blank'>
          <img src={logoUrls['Github']} alt='Github' height='36px' css={{background: '#FFF', borderRadius: '50%'}}/>
        </a>
      </div>
    </CardContainer>
  )
}

export default ProjectCard;
