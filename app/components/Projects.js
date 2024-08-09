import React, { Component } from 'react';
import styled from '@emotion/styled';
import ProjectCard from './ProjectCard.js';
import {Section, SectionHeading} from './shared';

import projectList from '../data/projectList';
import bgImage from '../images/heros/macbook-from-back-1080x720.jpg';

const ProjectSection = styled(Section)`
  padding-bottom: 200px;
  background-image: linear-gradient(rgba(200, 200, 200, 0.3), rgba(200, 200, 200, 0.3)), url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
  background-attachment: fixed; 
`
const ProjectTitleGroup = styled.div`
  width: 90%;
  max-width: 500px;
  padding:10px 10px 30px;
  border: 2px solid rgba(127, 125, 105,0.8);
  background-color: rgba(230, 230, 230, 0.8);
  margin:0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const H2 = styled.h2`
font-weight: 100;
font-size: 16px;
text-align: center
`

const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 30px
`

const Projects = React.forwardRef((props, ref) => {
  function createCards () {
    return (
      projectList.filter(el => el.siteUrl.length > 1 )
      .map(project => {
        return <ProjectCard key={project.name} project={project}/>
      })
    )
  }
  return (
    <ProjectSection ref={ref}>
      <ProjectTitleGroup>
        <SectionHeading>
          SAMPLE PROJECTS
        </SectionHeading>
        <H2>Click a website image to visit the live site.</H2>
        <H2>Github icons are linked to the corresponding repo.</H2> 
      </ProjectTitleGroup>
      <CardGroup>
        {createCards()}
      </CardGroup>
    </ProjectSection>
  )
})

export default Projects;
