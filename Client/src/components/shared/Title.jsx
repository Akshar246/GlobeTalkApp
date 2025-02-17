import React from 'react'
import {Helmet} from "react-helmet-async"

const Title  = ({
    title = "GlobeTalk",
    description = "This is my App called GlobeTalk",
 }) => {
    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
    );
  };

export default Title