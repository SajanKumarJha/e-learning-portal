import { useEffect, useState } from "react"
import { products } from "../../utils/ProductsList"
import { AnimatePresence, motion } from "framer-motion"
const Product = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(1)

    const nextProduct = () => {
        setDirection(1)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }

    const prevProduct = () => {
        setDirection(-1)
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            nextProduct()
        }, 8000)
        return () => clearInterval(timer)
    }, [])
    return (
        <div className='sl-product--main'>
            <div className="sl-title">
                <h6>Cloud Applications Tailored for Your Needs</h6>
                <p>
                    In addition to our powerful cloud infrastructure, we offer a suite of applications designed to enhance productivity, streamline workflows, and optimize storage. These applications are seamlessly integrated into our cloud environment, ensuring top performance and user experience.
                </p>
            </div>
            <div className="sl-product--row">
                <div className='sl-product-col--round' style={{ "--bgDark": products[currentIndex].bgDark, "--bgLight": products[currentIndex].bgLight }}>
                    <button className="sl-product-icon--prev" onClick={prevProduct}>
                        <i className='sl-icon--left-arrow' />
                    </button>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.2 }}

                            className="sl-product-icon-link--active"
                        >
                            <img
                                src={`${products[currentIndex].image}`}
                                alt={`${products[currentIndex].title} logo`}
                            />
                        </motion.div>
                    </AnimatePresence>
                    <button className="sl-product-icon--next" onClick={nextProduct}>
                        <i className='sl-icon--right-arrow' />
                    </button>
                </div>
                <div className="sl-product--subrow" style={{ "--bgLight": products[currentIndex].bgLight }}>
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
                            transition={{ duration: 0.5 }}
                            className="sl-product--col"
                        >
                            {products && (
                                <ProductItem
                                    title={products[currentIndex].title}
                                    description={products[currentIndex].description}
                                    features={products[currentIndex].features}
                                />
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
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