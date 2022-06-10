/**
 * @returns
 * This is a Wraper component to return the content between
 * tags and avoid many div in a root document.
 */

const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;
