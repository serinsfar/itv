import React from 'react';
import PropTypes from 'prop-types';

/**
 * A reusable 4-part page template:
 * 1) Hero (image left, title/subtitle + body right)
 * 2) Features grid (icon + title + description)
 * 3) Benefits (check-style cards: title + description)
 * 4) Services (intro paragraph + UL/LI)
 */
const FourPartPageTemplate = ({
  // Optional block rendered before everything (e.g., <Data/>, <Breadcrumbs/>)
  prelude = null,

  // Part 1: Hero
  pageTitle,
  hero = {
    imageSrc: '',
    imageAlt: '',
    title: '',
    subtitle: '',
    body: null, // React node (e.g., <p>...</p>)
  },

  // Part 2: Features
  featuresTitle = 'Features',
  features = [], // [{ icon: <Icon/>, title: string, description: string }]
  featuresCols = 'md:grid-cols-2 lg:grid-cols-2',

  // Part 3: Benefits
  benefitsTitle = 'Your Benefits',
  benefits = [], // [{ title: string, description: string }]
  benefitsCols = 'md:grid-cols-2',
  checkIconSrc, // required by the benefits check cards

  // Part 4: Services
  servicesTitle = 'Our Services',
  servicesIntro = null,        // React node or string paragraph
  servicesLeadText = 'We offer the following services:',
  servicesList = [],           // [string, string, ...]

  // Layout overrides
  containerClassName = 'container row-start-2 row-span-5 mb-20',
}) => {
  return (
    <div className={containerClassName}>
      {prelude}

      {pageTitle ? (
        <h1 className="pt-10 pb-10 text-3xl font-bold text-left">{pageTitle}</h1>
      ) : null}

      {/* --- Hero --- */}
        {(hero?.imageSrc || hero?.title || hero?.subtitle || hero?.body) && (
        <div className="grid xl:grid-cols-2 gap-8 place-items-center">
            <div
            className={`border-[5px] border-solid border-gray-200 shadow-sm rounded-xl ${hero?.imageWrapperClassName || ''}`}
            >
            {hero?.imageSrc ? (
                <img
                className={`rounded-md max-w-[320px] lg:max-w-[550px] max-h-[300px] ${hero?.imageClassName || ''}`}
                src={hero.imageSrc}
                alt={hero.imageAlt || ''}
                />
            ) : null}
            </div>
            <div className="mb:pl-12">
            {(hero?.title || hero?.subtitle) && (
                <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-2">
                {hero?.title}
                {hero?.subtitle ? (
                    <>
                    <br />
                    <span className="text-secondary font-normal">{hero.subtitle}</span>
                    </>
                ) : null}
                </div>
            )}
            {hero?.body ? <div className="text-gray-700">{hero.body}</div> : null}
            </div>
        </div>
        )}


      {/* --- Features --- */}
      {features?.length > 0 && (
        <>
          <h2 className="pt-16 pb-10 text-2xl font-bold text-left">{featuresTitle}</h2>
          <div className={`grid grid-cols-1 ${featuresCols} gap-8`}>
            {features.map(({ icon, title, description }, i) => (
              <div
                key={i}
                className="p-6 rounded-lg shadow-md bg-white border-l-4 border-secondary flex gap-4 items-start"
              >
                {icon ? <div className="mt-1">{icon}</div> : null}
                <div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* --- Benefits --- */}
      {benefits?.length > 0 && (
        <>
          <h2 className="pt-16 pb-10 text-2xl font-bold text-left">{benefitsTitle}</h2>
          <div className={`grid grid-cols-1 ${benefitsCols} gap-4`}>
            {benefits.map(({ title, description }, i) => (
              <div
                key={i}
                className="p-5 rounded-xl shadow-md bg-light border-l-4 flex flex-auto items-start gap-4 max-w-[655px]"
              >
                {checkIconSrc ? (
                  <img src={checkIconSrc} alt="check" className="w-6 h-6" />
                ) : null}
                <div className="w-full grid grid-cols-1 gap-1">
                  <p className="text-gray-900 font-semibold">{title}</p>
                  <p className="text-gray-700">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* --- Services --- */}
      {(servicesIntro || (servicesList && servicesList.length > 0)) && (
        <>
          <h2 className="pt-16 pb-10 text-2xl font-bold text-left">{servicesTitle}</h2>
          {servicesIntro ? (
            <p className="text-gray-700 leading-relaxed max-w-4xl">{servicesIntro}</p>
          ) : null}

          {servicesList?.length > 0 && (
            <>
              <p className="mt-6 text-gray-700">{servicesLeadText}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
                {servicesList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
};
FourPartPageTemplate.propTypes = {
  prelude: PropTypes.node,
  pageTitle: PropTypes.string,
  hero: PropTypes.shape({
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    body: PropTypes.node,
  }),
  featuresTitle: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  featuresCols: PropTypes.string,
  benefitsTitle: PropTypes.string,
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  benefitsCols: PropTypes.string,
  checkIconSrc: PropTypes.string,
  servicesTitle: PropTypes.string,
  servicesIntro: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  servicesLeadText: PropTypes.string,
  servicesList: PropTypes.arrayOf(PropTypes.string),
  containerClassName: PropTypes.string,
};


export default FourPartPageTemplate;
