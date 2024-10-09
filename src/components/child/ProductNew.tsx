import { products } from "../../utils/ProductsList"

const Product = () => {
    return (
        <div className='sl-product--main'>
            <div className="sl-product--col-title">
                <div className="sl-title">
                    <h6>Cloud Applications Tailored for Your Needs</h6>
                    <p>
                        In addition to our powerful cloud infrastructure, we offer a suite of applications designed to enhance productivity, streamline workflows, and optimize storage. These applications are seamlessly integrated into our cloud environment, ensuring top performance and user experience.
                    </p>
                </div>
            </div>
            <div className="sl-product--row-content">
                {products && products.map((product) => (
                    <div className="sl-product--col-content">
                        <ProductItem
                            title={product.title}
                            description={product.description}
                            features={product.features}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

const ProductItem = ({ title, description, features }: { title: string, description: string, features: string[] }) => {
    return (
        <>
            <div className="sl-product--title">
                {title}
            </div>
            <div className="sl-product--content">
                <p>{description}</p>
                <strong>Key Features</strong>
                <ul>
                    {features && features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Product