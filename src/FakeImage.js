import React from 'react';

export function FakeImage(props) {
  const { name, l, w } = props.args;
  return (
    <img
      className="p-2"
      alt="alt"
      src="foo"
    />
  );
}

export function OrderImage(props) {
  const {
    name, styles, image,
  } = props;
  return (
    // <div className={`${styles} `}>
    //   <img
    //     className=""
    //     alt={name}
    //     src={`/${image}`}
    //   />
    // </div>
  );
}
