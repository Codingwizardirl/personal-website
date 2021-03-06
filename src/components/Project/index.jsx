import React from 'react';
import PropTypes from 'prop-types';
import { GithubIcon } from '../Icons';

// eslint-disable-next-line
import styles from './styles.css';

const renderLinks = links => (
  <div className="links">
    {
    links.map(link => (
      link.title === 'github' ?
        <a key={link.link} href={link.link} rel="noopener noreferrer" target="_blank" className="github-link"><GithubIcon /></a> :
        <a key={link.link} href={link.link} rel="noopener noreferrer" target="_blank" className="button">{link.title}</a>
     ))
    }
  </div>
);

const renderTags = tags => (
  <div className="tags">
    {
    tags.map(tag => (
      <div className="tag" key={tag}>{tag}</div>
    ))
    }
  </div>
);

const Project = props => (
  <div className="project">
    <div className="title">{props.title}</div>
    <div className="description">{props.description}</div>
    {renderTags(props.tags)}
    {renderLinks(props.links)}
  </div>
  );

Project.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  description: PropTypes.string,
};

Project.defaultProps = {
  description: '',
};

export default Project;
