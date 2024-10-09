import React, { FC, useCallback, useState } from 'react';
import { featuresList } from '../../utils/FeatureList';

interface Feature {
    featureTitle: string;
    featureDisc: string;
}

interface FeatureProps {
    title: string;
    icon: string;
    description: string;
    features: Feature[];
}

interface FeaturesItemProps extends FeatureProps {
    isHovered: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const Features: FC = () => {
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = useCallback((rowIndex: number, itemIndex: number) => {
        setHoveredRow(rowIndex);
        setHoveredIndex(itemIndex);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredRow(null);
        setHoveredIndex(null);
    }, []);

    const chunkedFeatures = featuresList.reduce((resultArray: FeatureProps[][], item, index) => {
        const chunkIndex = Math.floor(index / 3);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);

    return (
        <div className="sl-features--main">
            <div className="sl-title">
                <h6>Key Features</h6>
                <p>Enable your transition to the public cloud with Skylus, driven by innovative solutions
                    tailored to any business environment. Enjoy seamless integration, dynamic scaling, and
                    intuitive simplicity, allowing you to maximize cloud storage capabilities while enhancing
                    operational efficiency and scalability.</p>
            </div>
            {chunkedFeatures.map((row, rowIndex) => (
                <div key={rowIndex} className="sl-features--row">
                    {row.map((feature, itemIndex) => (
                        <FeaturesItem
                            key={itemIndex}
                            {...feature}
                            isHovered={hoveredRow === rowIndex && hoveredIndex === itemIndex && feature.features}
                            onMouseEnter={() => handleMouseEnter(rowIndex, itemIndex)}
                            onMouseLeave={handleMouseLeave}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

const FeaturesItem: FC<FeaturesItemProps> = ({ title, icon, description, features, isHovered, onMouseEnter, onMouseLeave }) => {
    return (
        <div className={`sl-features--col `}
            // ${isHovered && "hovered"}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="sl-features--content">
                <div className='sl-features--content-col'>
                    <div className="sl-features--title">
                        <i className={icon} />
                        <span>{title}</span>
                    </div>
                    {/* <p>{description}</p> */}
                    <ul className="sl-features--list">
                        {features?.map((feature, index) => (
                            <li key={index}>
                                <strong>{feature.featureTitle} : </strong>
                                <span> {feature.featureDisc}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Features;
