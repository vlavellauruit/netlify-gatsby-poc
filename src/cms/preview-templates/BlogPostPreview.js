import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/blog-post";
import { TestingTemplate } from "../../templates/testing-template";

const BlogPostPreview = ({ entry, widgetFor }) => {
  const templateType = entry.getIn(["data", "templateKey"]);
  if (templateType === "blog-post") {
    return (
      <BlogPostTemplate
        content={widgetFor("body")}
        template={entry.getIn(["data", "templateKey"])}
        description={entry.getIn(["data", "description"])}
        tags={entry.getIn(["data", "tags"])}
        title={entry.getIn(["data", "title"])}
      />
    );
  }

  return (
    <TestingTemplate
      content={widgetFor("body")}
      template={entry.getIn(["data", "templateKey"])}
      description={entry.getIn(["data", "description"])}
      tags={entry.getIn(["data", "tags"])}
      title={entry.getIn(["data", "title"])}
    />
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
