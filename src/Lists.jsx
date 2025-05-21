import PropTypes from 'prop-types';

function Lists({ item = [], category = 'No Category' }) {
   const listItems = item.map(list => <li key={list.id}>{list.name}: {list.cal}</li>);

   return (
      <>
         <h3>{category}</h3>
         {item.length > 0 ? <ul>{listItems}</ul> : null}
      </>
   );
}

Lists.propTypes = {
   item: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         cal: PropTypes.string.isRequired,
      })
   ).isRequired,
   category: PropTypes.string
};

export default Lists;