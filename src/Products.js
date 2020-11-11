import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from './action';

const Products = ({ getProducts, loading, products }) => {
	React.useEffect(
		() => {
			getProducts();
		},
		[ getProducts ]
	);

	if (loading) {
		return <h2 className="section-title">Loading...</h2>;
	}
	return (
		<section className="section">
			return <h2 className="section-title">Our products</h2>;
			<ul className="products">
				{products.map((item) => {
					return (
						<li key={item.id} className="product">
							<img src={item.image.url} alt={item.title} />
							<h4>{item.title}</h4>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

Products.propTypes = {
	loading: PropTypes.bool.isRequired,
	products: PropTypes.arrayOf(PropTypes.object).isRequired,
	getProducts: PropTypes.func.isRequired
};
function mapStateToProps({ productState: { products, loading } }) {
	return { products, loading };
}

export default connect(mapStateToProps, { getProducts })(Products);
