import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const List = ({ className, title, items }) => (
  <div className={className}>
    <Heading tag="h3" theme="gray">
      {title}
    </Heading>
    <div className="mt-2.5">
      {items.map(({ linkUrl, linkText }, index) => (
        <div className="py-4 border-b lg:py-6 last:pb-0 border-gray-3 last:border-none" key={index}>
          <Link to={linkUrl}>
            <span className="text-lg lg:text-xl pt-1.5 font-medium">{linkText}</span>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

List.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      linkUrl: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
    })
  ).isRequired,
};

List.defaultProps = {
  className: null,
};

export default List;